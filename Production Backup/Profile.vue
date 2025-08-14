<template>
	<NoPermission v-if="!$user.data" />
	<div v-else-if="profile.data">
		<header
			class="sticky top-0 z-10 flex flex-col md:flex-row md:items-center justify-between border-b bg-surface-white px-3 py-2.5 sm:px-5"
		>
			<Breadcrumbs class="h-7" :items="breadcrumbs" />
		</header>
		<div class="group relative h-[130px] w-full">
			<img
				v-if="profile.data.cover_image"
				:src="profile.data.cover_image"
				class="h-[130px] w-full object-cover object-center"
			/>
			<div
				v-else
				:class="{ 'bg-surface-gray-2': !profile.data.cover_image }"
				class="h-[130px] w-full"
			></div>
			<div
				class="absolute bottom-0 left-1/2 mb-4 flex -translate-x-1/2 space-x-2 opacity-0 transition-opacity focus-within:opacity-100 group-hover:opacity-100"
				v-if="isSessionUser()"
			>
				<EditCoverImage
					@select="(imageUrl) => coverImage.submit({ url: imageUrl })"
				>
					<!-- <template v-slot="{ togglePopover }">
						<Button
							v-if="!readOnlyMode"
							variant="outline"
							@click="togglePopover()"
						>
							<template #prefix>
								<Edit class="w-4 h-4 stroke-1.5 text-ink-gray-7" />
							</template>
							{{ __('Edit') }}
						</Button>
					</template> -->
				</EditCoverImage>
			</div>
		</div>
		<div class="mx-auto -mt-10 md:-mt-4 max-w-4xl translate-x-0 px-5">
			<div class="flex flex-col md:flex-row items-center">
				<div>
					<img
						v-if="profile.data.user_image"
						:src="profile.data.user_image"
						class="object-cover h-[100px] w-[100px] rounded-full border-4 border-white object-cover"
					/>
					<UserAvatar
						v-else
						:user="profile.data"
						class="object-cover h-[100px] w-[100px] rounded-full border-4 border-white object-cover"
					/>
				</div>
				<div class="ml-6">
					<h2 class="mt-2 text-3xl font-semibold text-ink-gray-9">
						{{ profile.data.full_name }}
					</h2>
					<div class="mt-2 text-base text-ink-gray-7">
						{{ profile.data.headline }}
					</div>
				</div>
				<Button
					v-if="isSessionUser() && !readOnlyMode"
					class="mt-3 sm:mt-0 md:ml-auto"
					@click="editProfile()"
				>
					<template #prefix>
						<Edit class="w-4 h-4 stroke-1.5 text-ink-gray-7" />
					</template>
					{{ __('Edit Profile') }}
				</Button>
			</div>

			<div class="mb-4 mt-6">
				<TabButtons
					class="inline-block"
					:buttons="getTabButtons()"
					v-model="activeTab"
				/>
			</div>
			<router-view :profile="profile" :key="profile.data?.name" />
		</div>
	</div>
	<EditProfile
		v-model="showProfileModal"
		v-model:reloadProfile="profile"
		:profile="profile"
	/>
</template>
<script setup>
import {
  Breadcrumbs,
  createResource,
  Button,
  TabButtons,
  usePageMeta,
} from 'frappe-ui';
import { computed, inject, watch, ref, onMounted, watchEffect } from 'vue';
import { sessionStore } from '@/stores/session';
import { Edit } from 'lucide-vue-next';
import UserAvatar from '@/components/UserAvatar.vue';
import { useRoute, useRouter } from 'vue-router';
import NoPermission from '@/components/NoPermission.vue';
import { convertToTitleCase } from '@/utils';
import EditProfile from '@/components/Modals/EditProfile.vue';
import EditCoverImage from '@/components/Modals/EditCoverImage.vue';

const { user, brand } = sessionStore();
const $user = inject('$user');
const route = useRoute();
const router = useRouter();
const activeTab = ref('');
const showProfileModal = ref(false);
const readOnlyMode = window.read_only_mode;

const props = defineProps({
  username: {
    type: String,
    required: true,
  },
});

onMounted(() => {
  if ($user.data) profile.reload();

  setActiveTab();
});

const profile = createResource({
  url: 'frappe.client.get',
  makeParams(values) {
    return {
      doctype: 'User',
      filters: {
        username: props.username,
      },
    };
  },
  
});




const coverImage = createResource({
  url: 'frappe.client.set_value',
  makeParams(values) {
    return {
      doctype: 'User',
      name: profile.data?.name,
      fieldname: 'cover_image',
      value: values.url,
    };
  },
  onSuccess() {
    profile.reload();
  },
});

const setActiveTab = () => {
  let fragments = route.path.split('/');
  let sections = ['certificates', 'roles', 'slots', 'schedule'];
  sections.forEach((section) => {
    if (fragments.includes(section)) {
      activeTab.value = convertToTitleCase(section);
    }
  });
  if (!activeTab.value) activeTab.value = 'About';
};
watch(
  () => profile.data?.certification,
  (newVal) => {
    if (activeTab.value === 'Certificates') {
      console.log('🎓 User Certifications:', newVal);
    }
  },
  { immediate: true, deep: true }
);



watchEffect(() => {
	debugger;
  if (activeTab.value) {
    let route = {
      About: { name: 'ProfileAbout' },
      Certificates: { name: 'ProfileCertificates' },
      Roles: { name: 'ProfileRoles' },
      Slots: { name: 'ProfileEvaluator' },
      Schedule: { name: 'ProfileEvaluationSchedule' },
    }[activeTab.value];
    router.push(route);
  }
});


watch(
  () => props.username,
  () => {
    profile.reload();
  }
);

const editProfile = () => {
  showProfileModal.value = true;
};

const isSessionUser = () => {
  return $user.data?.email === profile.data?.email;
};

const getTabButtons = () => {
  let buttons = [{ label: 'About' }, { label: 'Certificates' }];
  if ($user.data?.is_moderator) buttons.push({ label: 'Roles' });
  if (
    isSessionUser() &&
    ($user.data?.is_evaluator || $user.data?.is_moderator)
  ) {
    buttons.push({ label: 'Slots' });
    buttons.push({ label: 'Schedule' });
  }

  return buttons;
};

const breadcrumbs = computed(() => {
  let crumbs = [
    {
      label: 'People',
    },
    {
      label: profile.data?.full_name,
      route: {
        name: 'Profile',
        params: {
          username: user.doc?.username,
        },
      },
    },
  ];
  return crumbs;
});

usePageMeta(() => {
  return {
    title: profile.data?.full_name,
    icon: brand.favicon,
  };
});

watchEffect(() => {
  if (activeTab.value) {
    let route = {
      About: { name: 'ProfileAbout' },
      Certificates: { name: 'ProfileCertificates' },
      Roles: { name: 'ProfileRoles' },
      Slots: { name: 'ProfileEvaluator' },
      Schedule: { name: 'ProfileEvaluationSchedule' },
    }[activeTab.value];
    router.push(route);
  }
});


</script>



<style>


/* Main Container */
.main-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    position: relative;
}

/* Profile Section */
.profile-avatar-container {
    display: inline-block;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #e1e5e8;
    overflow: hidden;
    text-align: center;
    line-height: 60px;
    font-size: 22px;
    color: #2d3748;
    font-weight: 500;
}

.profile-avatar-container .avatar {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #edf2f7;
    color: #4a5568;
}

/* Profile Info */
.profile-name {
    font-size: 24px;
    font-weight: 600;
    color: #2d3748;
    margin-left: 15px;
    margin-top: 10px;
}

.profile-headline {
    font-size: 14px;
    color: #718096;
    margin-top: 5px;
}

/* Profile Action Button */
.profile-actions button {
    padding: 8px 12px;
    background-color: #edf2f7;
    color: #4a5568;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: background-color 0.3s;
}

.profile-actions button:hover {
    background-color: #e2e8f0;
}

.profile-actions button svg {
    width: 16px;
    height: 16px;
    color: #4a5568;
}

/* Tab Navigation */
.tab-navigation {
    margin-top: 30px;
}

.tab-navigation button {
    font-size: 16px;
    font-weight: 500;
    padding: 10px;
    color: #718096;
    background-color: #edf2f7;
    border-radius: 10px;
    border: 1px solid #e2e8f0;
    transition: background-color 0.3s ease, color 0.3s ease;
}

.tab-navigation button:hover {
    background-color: #e2e8f0;
    color: #2d3748;
}

.tab-navigation button[aria-checked="true"] {
    background-color: #fff;
    color: #2d3748;
    border-color: #3182ce;
}

/* Certificates Section */
.mt-7 .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
}

.mt-7 .grid .flex {
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 4px 6px 12px rgba(0, 0, 0, 0.3);
    padding: 20px;
    transition: box-shadow 0.3s ease;
}

.mt-7 .grid .flex:hover {
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}


.mt-7 .grid .flex .font-medium {
    font-size: 18px;
    font-weight: 600;
    color: #2d3748;
    margin-bottom: 12px;
}


.mt-7 .grid .flex .text-sm {
    font-size: 14px;
    color: #718096;
    font-weight: 500;
    margin-top: auto;
}


/* Responsive Design */
@media (max-width: 768px) {
    .profile-avatar-container {
        width: 50px;
        height: 50px;
        font-size: 18px;
    }

    .profile-name {
        font-size: 20px;
    }

    .tab-navigation {
        display: flex;
        justify-content: space-between;
    }

    .tab-navigation button {
        font-size: 14px;
        padding: 8px;
    }

    .mt-7 .grid {
        grid-template-columns: 1fr;
    }
}


button[aria-checked="true"] {
    background-color: #ff4602 !important; /* Orange for active tab */
    color: #fff !important;
    font-weight: 600;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
    transform: scale(1.05); /* Slightly enlarge the active tab */
}


/* Transitions for smooth hover and active state */
button {
    transition: background-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
   
}


/* Optional: Adding padding and centering for labels */
#headlessui-radiogroup-v-15 {
    padding: 10px 16px;       
    font-size: 16px;           /* Increase font size for better readability */
    transform: scale(1.1);     /* Slightly enlarge the container */
}

/* Optionally, increase the size of child elements */
#headlessui-radiogroup-v-15 button {
    padding: 14px 20px;        /* Increase padding for buttons inside */
    font-size: 16px;           /* Adjust font size inside the buttons */
}

/* Increase the size of the label span for each button */
#headlessui-radiogroup-v-15 button span {
    font-size: 16px;          
}
.group .bg-surface-gray-2 {
  background-color: #fff !important;
}


/* Base style for all buttons */
.space-x-0\.5 button {
    padding: 20px 19px !important;
    font-size: 16px !important;
    border-radius: 6px !important;
    background-color: #f5f5f5 !important;
    color: #333 !important;
    border: 1px solid #ddd !important;
    font-weight: 600 !important;
    transition: all 0.3s ease !important;
    transform: none !important;
    box-shadow: none !important;
	 margin-right: 12px !important; /* 👈 adds spacing between buttons */
}

/* Target button inside a div where aria-checked is true */
div[aria-checked="true"] > button {
  background-color: #ff4602 !important;     /* Orange background */
  color: #fff !important;                   /* White text */
  font-weight: 600 !important;              /* Bold text */
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15) !important; /* Subtle shadow */
  transform: scale(1.05) !important;        /* Slight enlargement */
}

.flex.space-x-0\.5.bg-surface-gray-2 {
  background-color: transparent !important;
  border: none !important;
}

</style>
