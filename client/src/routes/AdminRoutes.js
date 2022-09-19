import React from 'react';
import { AppstoreOutlined } from '@ant-design/icons';
import Dashboard from 'pages/Dashboard';
import lecturerIcon from 'assets/svg/lecturer.svg';
import Lecturer from 'pages/Lecturer';
import Student from 'pages/Student';
import AddStudent from 'pages/Student/AddStudent';
import Employee from 'pages/Employee';
import AddEmployee from 'pages/Employee/AddEmployee';

const adminRoutes = [
  {
    path: '/',
    exact: true,
    page: () => <Dashboard />,
  },
  {
    path: '/lecturer',
    exact: true,
    page: () => <Lecturer />,
  },
  {
    path: '/student/',
    exact: true,
    page: () => <Student />,
  },
  {
    path: '/student/add',
    exact: true,
    page: () => <AddStudent />,
  },
  {
    path: '/employee/',
    exact: true,
    page: () => <Employee />
  },
  {
    path: '/employee/add',
    exact: true,
    page: () => <AddEmployee />
  }
];

const adminMenuItems = {
  path: '/',
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      icon: <AppstoreOutlined />,
      component: <Dashboard />,
    },
    {
      path: '/lecturer',
      name: 'Lecturer',
      icon: lecturerIcon,
      component: <Lecturer />,
    },
    {
      name: 'Student',
      icon: lecturerIcon,
      routes: [
        {
          path: '/student',
          name: 'Student list',
          component: <Student />,
        },
        {
          path: '/student/add',
          name: 'Add student',
          component: <AddStudent />,
        },
      ],
    },
    {
      name: 'Employee',
      icon: lecturerIcon,
      routes: [
        {
          path: '/employee',
          name: 'Employee list',
          component: <Employee />,
        },
        {
          path: '/employee/add',
          name: 'Add employee',
          component: <AddEmployee />,
        },
      ]
    }
  ],
};
export { adminRoutes, adminMenuItems };
