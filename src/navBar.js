import React from 'react';
import { Menubar } from 'primereact/menubar';
import 'primeicons/primeicons.css';

export default function NavBar() {
  const items = [
    {
      label: 'Home',
      icon: 'pi pi-home',
      command: () => navigateTo('/'),
    },
    {
      label: 'Profile',
      icon: 'pi pi-user',
      command: () => navigateTo('/Profile'),
    },
  ];

  const navigateTo = (path) => {
    window.history.pushState(null, '', path);
  };

  return <Menubar model={items} />;
}
