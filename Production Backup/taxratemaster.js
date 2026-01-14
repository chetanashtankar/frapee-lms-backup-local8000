setTimeout(function () {
    Platform.Views.RuntimeContext.changeLanguage();
}, 500);
const element = document.getElementById('platform_id_DkVNHphx_2');

// Hide the element by setting its display style to 'none'
if (element) {
    element.style.display = 'none';
}

debugger;

function updateLinkIcons() {
    document.querySelectorAll('a[href="select"]:not(.fa-pen-added)').forEach(link => {
        link.innerHTML = '<i class="fa-solid fa-pen-to-square" style="color: rgb(0, 0, 0);"></i>';
        link.classList.add('fa-pen-added');
    });
}
// Initial update after a timeout
setTimeout(updateLinkIcons, 500);

// Create a MutationObserver to watch for changes in the DOM
new MutationObserver((mutationsList) => {
    if (mutationsList.some(mutation => mutation.type === 'childList' && mutation.addedNodes.length > 0)) {
        updateLinkIcons();
    }
}).observe(document.body, { childList: true, subtree: true });

// Add event listener to handle clicks on 'select' links
document.addEventListener('click', async (event) => {
    const link = event.target.closest('a[href="select"]');
    if (link) {
        event.preventDefault();

        const row = link.closest('[role="row"]');
        if (row) {
            try {
         debugger;
                // Gather row details
                const code = row.querySelector('[col-id="Code"]')?.textContent.trim();
                const taxRate = row.querySelector('[col-id="TaxRate"]')?.textContent.trim();
                const country = row.querySelector('[col-id="Country"]')?.textContent.trim();
                const ledger = row.querySelector('[col-id="Ledger"]')?.textContent.trim();
                const businessUnit = row.querySelector('[col-id="BusinessUnit"]')?.textContent.trim();
                const taxLiabilityAccount = row.querySelector('[col-id="TaxLiabilityAccount"]')?.textContent.trim();
                const taxRegime = row.querySelector('[col-id="TaxRegime"]')?.textContent.trim();
                const taxClassificationCode = row.querySelector('[col-id="TaxClassificationCode"]')?.textContent.trim();

                // Execute database script to fetch details
                await new Promise((resolve, reject) => {
                    new PlatformContext('form_kbKoOcJo').getServices().getDatabaseScript().execute({
                        applicationName: "Data Administration",
                        async: false,
                        variables: [], // No variables required initially
                        databaseScriptName: "GetAllMasterDataForTaxMaster",
                        processflowName: "LookupFlow",
                        onSuccess: function (response) {
                            console.log(response);
                            if (response && response.success && response.data.length > 0) {
                                // Match based on available details
                                const data = response.data.find(item => 
                                    (code === '' || item.Code === code) &&
                                    (taxRate === '' || item.TaxRate === taxRate) &&
                                    (country === '' || item.Country === country) &&
                                    (ledger === '' || item.Ledger === ledger) &&
                                    (businessUnit === '' || item.BusinessUnit === businessUnit) &&
                                    (taxLiabilityAccount === '' || item.TaxLiabilityAccount === taxLiabilityAccount) &&
                                    (taxRegime === '' || item.TaxRegime === taxRegime) &&
                                    (taxClassificationCode === '' || item.TaxClassificationCode === taxClassificationCode)
                                );
                                if (data) {
                                    console.log('Fetched ID:', data.TaxMasterID);
                                    // Bind fetched ID to text box
                                    const input = document.getElementsByName('FunctionMasterID')[0];
                                    if (input) {
                                        input.value = data.TaxMasterID;      
                                        input.dispatchEvent(new Event('change'));
                                    }
                                } else {
                                    console.error('No matching data found for row details:', { taxRegistrationNumber, addressName, country, name, number, source, additionalCode,bankAccountNumber,ibanNumber,address, city });
                                }
                                resolve();
                            } else {
                                console.error('No data found in response');
                                reject('No data found');
                            }
                        },
                        onError: function (error) {
                            console.error('Database script error:', error);
                            reject(error);
                        }
                    });
                });
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        } else {
            console.error('Row element not found');
        } 

        // Hide additional elements when 'select' is clicked
        gridContainer.style.display = 'none';
        addNewButtonContainer.style.setProperty("display", "none", "important");
    }
});

// Hide and show elements
const toggleButton = document.getElementById('platform_id_Z48EFee3');
const cancelButton = document.getElementById('platform_id_Mt7ku5D2_2');
const saveButton = document.getElementById('platform_id_Mt7ku5D2');
const searchBox = document.getElementById('platform_id_ITvPGrha_6');
const elements = [
    document.getElementById('platform_id_iU1IPDMp'),
];

// Additional elements to hide
const gridContainer = document.getElementById('platform_id_ITvPGrha_4');
const addNewButtonContainer = document.getElementById('platform_id_Z48EFee3'); 
const extraColumn = document.querySelector('.pfm-column-layout.extra-column-hide');

// Check if URL contains ID
const queryString = window.location.href;
const hasId = queryString.includes('?FunctionMasterID=');

// Initialize elements to be hidden based on URL ID
if (!hasId) {
    elements.forEach(element => element.style.display = 'none');
    if (extraColumn) extraColumn.style.display = 'none';
}

// Function to toggle visibility
function toggleVisibility(show = true) {
    elements.forEach(element => {
        element.style.display = show ? 'block' : 'none';
    });

    // Hide additional elements
    gridContainer.style.display = 'none';
    addNewButtonContainer.style.setProperty("display", "none", "important");
    searchBox.style.display = 'none';

    //if (extraColumn) extraColumn.style.display = show ? 'block' : 'none';
}

// Function to show additional elements
function showAdditionalElements() {
    gridContainer.style.display = 'block';
    addNewButtonContainer.style.setProperty("display", "block", "important");
    searchBox.style.display = 'block';
    if (extraColumn) extraColumn.style.display = 'block'; // Show extra column
}

// Event listeners
// Toggle visibility for main elements
toggleButton.addEventListener('click', () => toggleVisibility());

// Hide all on cancel button click
cancelButton.addEventListener('click', () => {
    toggleVisibility(false);
    showAdditionalElements();
    if (extraColumn) extraColumn.style.display = 'none'; // Hide extra column on cancel
    addNewButtonContainer.style.setProperty("display", "flex", "important");
    document.getElementById('fieldset-platform').style.display = 'none';
});

// Show elements on save button click
saveButton.addEventListener('click', async (e) => {
    e.preventDefault(); // Prevent any default form submission behavior
    debugger;

    // Show preloader
    const platformContext = new PlatformContext('form_kbKoOcJo');
    platformContext.getPreloader().show();

    // Fetch input values
    const functionMasterID = document.getElementsByName("FunctionMasterID")[0]?.value;
    const initiatedDate = document.getElementsByName("InitiatedDate")[0]?.value;
    const endDate = document.getElementsByName("EndDate")[0]?.value;
    const code = document.getElementsByName("Code")[0]?.value;
    const taxRate = document.getElementsByName("TaxRate")[0]?.value;
    const country = document.getElementsByName("Country")[0]?.value;
    const defaultValue = document.getElementsByName("Default")[0]?.value;
    const ledger = document.getElementsByName("Ledger")[0]?.value;
    const businessUnit = document.getElementsByName("BusinessUnit")[0]?.value;
    const taxExpenseAccount = document.getElementsByName("TaxExpenseAccount")[0]?.value;
    const taxRecoverableAccount = document.getElementsByName("TaxRecoverableAccount")[0]?.value;
    const taxLiabilityAccount = document.getElementsByName("TaxLiabilityAccount")[0]?.value;
    const interimTaxAccount = document.getElementsByName("InterimTaxAccount")[0]?.value;
    const taxRegime = document.getElementsByName("TaxRegime")[0]?.value;
    const taxClassification = document.getElementsByName("TaxClassification")[0]?.value;
    const taxClassificationCode = document.getElementsByName("TaxClassificationCode")[0]?.value;

    const isEnabledValue = 1; // Default to '1'

    // Validation for required fields
    if (initiatedDate) {
        try {
            // Execute database script
            await new Promise((resolve, reject) => {
                platformContext.getServices().getDatabaseScript().execute({
                    applicationName: "Data Administration",
                    async: false,
                    variables: [
                        { name: "FunctionMasterID", value: functionMasterID },
                        { name: "InitiatedDate", value: initiatedDate },
                        { name: "EndDate", value: endDate },
                        { name: "Code", value: code },
                        { name: "TaxRate", value: taxRate },
                        { name: "Country", value: country },
                        { name: "Default", value: defaultValue },
                        { name: "Ledger", value: ledger },
                        { name: "BusinessUnit", value: businessUnit },
                        { name: "TaxExpenseAccount", value: taxExpenseAccount },
                        { name: "TaxRecoverableAccount", value: taxRecoverableAccount },
                        { name: "TaxLiabilityAccount", value: taxLiabilityAccount },
                        { name: "InterimTaxAccount", value: interimTaxAccount },
                        { name: "TaxRegime", value: taxRegime },
                        { name: "TaxClassification", value: taxClassification },
                        { name: "TaxClassificationCode", value: taxClassificationCode },
                        { name: "IsEnabled", value: isEnabledValue },
                        { name: "LoggedUserID", value: platformContext.getUser().getId() }
                    ],
                    databaseScriptName: "UpsertTaxRateMaster",
                    processflowName: "LookupFlow",
                    onSuccess: function (response) {
                        if (response.success) {
                            setTimeout(() => {
                                platformContext.getModal().success("Data Saved Successfully." ,
											
											function res(){
								  toggleVisibility(false);
                                showAdditionalElements();
                                if (extraColumn) extraColumn.style.display = 'none';
                                document.getElementById('fieldset-platform').style.display = 'none';
								}
							);
                                platformContext.getPreloader().hide();
                                
                                resolve();
                            }, 100);
                        } else {
                            reject("Response unsuccessful");
                        }
                    },
                    onError: function (response) {
                        platformContext.getPreloader().hide();
                        console.error(response);
                        reject(response);
                    }
                });
            });
        } catch (error) {
            console.error('Error saving data:', error);
        }
    } else {
        platformContext.getModal().error("Please fill the required fields.");
	   setTimeout(function(){
		Platform.Views.RuntimeContext.changeLanguage();
	  },500);
        platformContext.getPreloader().hide();
    }
});



addNewButtonContainer.addEventListener('click', () => {
    document.getElementById('fieldset-platform').style.display = 'block';
    // Clear the values of the input fields
    debugger;
	
   document.getElementById('platform_id_zLPDn5up').value = ''; // FunctionMasterID
    document.getElementById('platform_id_32c93jp8').value = ''; // Country
    document.getElementById('platform_id_fBSC61uC').value = ''; // Code
    document.getElementById('platform_id_fBSC61uC_2').value = ''; // TaxRate
    document.getElementById('platform_id_fBSC61uC_3').value = ''; // Default
    document.getElementById('platform_id_fBSC61uC_4').value = ''; // Ledger
    document.getElementById('platform_id_fBSC61uC_5').value = ''; // BusinessUnit
    document.getElementById('platform_id_fBSC61uC_6').value = ''; // TaxExpenseAccount
    document.getElementById('platform_id_fBSC61uC_7').value = ''; // TaxRecoverableAccount
    document.getElementById('platform_id_fBSC61uC_8').value = ''; // TaxLiabilityAccount
    document.getElementById('platform_id_fBSC61uC_9').value = ''; // InterimTaxAccount
    document.getElementById('platform_id_fBSC61uC_10').value = ''; // TaxRegime
    document.getElementById('platform_id_fBSC61uC_11').value = ''; // TaxClassification
    document.getElementById('platform_id_fBSC61uC_12').value = ''; // TaxClassificationCode
    document.getElementById('platform_id_SIft2m2').value = ''; // InitiatedDate
    document.getElementById('platform_id_SIft2m2_2').value = ''; // EndDate

});

document.addEventListener('click', (event) => {
    const link = event.target.closest('a[href="select"]');
    if (link) {
        toggleVisibility(true);

        // Hide additional elements when 'select' is clicked
        gridContainer.style.display = 'none';
        addNewButtonContainer.style.setProperty("display", "none", "important");
        searchBox.style.display = 'none';
        document.getElementById('fieldset-platform').style.display = 'block';
    }
});
