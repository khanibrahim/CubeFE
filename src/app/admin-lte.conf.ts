export var adminLteConf = {
  skin: 'blue',
  sidebarLeftMenu: [
    { label: 'Home', route: 'cube/home', iconClasses: 'fa fa-th' },
    { label: 'MAIN NAVIGATION', separator: true },
    {
      label : 'Q-Board', iconClasses: 'fa fa-font', route: '/cube/qboard'
    },
    {
      label: 'Settings', iconClasses: 'fa fa-cog', children: [
        { label: 'Masters', iconClasses: 'fa fa-list', route: '/cube/settings/masters' },
        { label: 'User Profile', iconClasses: 'fa fa-user', route: '/cube/settings/userprofile' },
        { label: 'Property Profile', iconClasses: 'fa fa-user', route: '/cube/settings/propertyprofile' }
      ]
    }


  ],
  layout: 'fixed',
  isSidebarRightCollapsed: true
};