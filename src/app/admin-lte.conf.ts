export var adminLteConf = {
  skin: 'green',
  sidebarLeftMenu: [
    {label: 'Home', route: '/', iconClasses: 'fa fa-th'},
    {label: 'MAIN NAVIGATION', separator: true},
    {label: 'User', iconClasses: 'fa fa-files-o', children: [
      {label: 'Register', route: '/Register'},
      {label: 'Parent 2', children: [
        {label: 'Children 2', route: 'parent/parent2/children2'}
      ]}]}


  ],
  layout:'fixed',
  isSidebarRightCollapsed:true
};