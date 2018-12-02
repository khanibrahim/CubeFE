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
        { label: 'Masters', iconClasses: 'fa fa-list', route: '/cube/masters' },
        { label: 'User Profile', iconClasses: 'fa fa-user', route: '/login' }
      ]
    }


  ],
  layout: 'fixed',
  isSidebarRightCollapsed: true
};