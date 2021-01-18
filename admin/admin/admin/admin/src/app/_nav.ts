interface NavAttributes {
  [propName: string]: any;
}
interface NavWrapper {
  attributes: NavAttributes;
  element: string;
}
interface NavBadge {
  text: string;
  variant: string;
}
interface NavLabel {
  class?: string;
  variant: string;
}

export interface NavData {
  name?: string;
  url?: string;
  icon?: string;
  badge?: NavBadge;
  title?: boolean;
  children?: NavData[];
  variant?: string;
  attributes?: NavAttributes;
  divider?: boolean;
  class?: string;
  label?: NavLabel;
  wrapper?: NavWrapper;
}

export const navItems: NavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
  name: ' Deparrtment',
  url: '/department',
  icon: 'icon-list',
  children: [
   
    {
        name: 'Praposal',
         url: '/department/Agri'
       
       },
       {
        name: 'Assistent Clark',
         url: '/department/edu'
       
       },
       {
        name: 'Head Clark',
         url: '/department/head-cleark-login'
       
       },
       {
        name: 'Dy Director',
         url: '/department/dy-derector-login'
       
       },
       {
        name: 'Dist Dy Director',
         url: '/department/dist-director-login'
       
       },

     
    
  ]
},
 {
   name: 'REPORT',
   url: '/report',
   icon: 'icon-list',
   children: [
     {
      name: 'LETTER REPORT',
      url: '/report/file-report'
     
    },
    
    
  ]
},
  
];
