import React from 'react';
import App from './app';
import HomePage from './pages/homePage';
import ContactPage from './pages/contactPage';
import Services from './pages/servicesPage';
import About from './pages/aboutPage';
import Posts from './pages/blog/postsPage';
import Post from './pages/blog/postPage';
import TermsAndConditions from './pages/policies/termsAndConditions';
import Privacy from './pages/policies/privacy';
import CookiesPolicy from './pages/policies/cookiesPolicy';
import ProductsPage from './pages/productsPage';
import ProductPage from './pages/productPage';
import NotFoundPage from './pages/notFound404Page';
import CustomLayout from './layouts/custom_layout';
import HomePageLayout from './layouts/home_page_layout';
import ProductAdmin from './admin/product/productAdmin';

export default [
    {
        path: '/blog',
        ...App,
        routes: [
            {
                path: '/blog/:id',
                ...Post
            },
            {
                ...Posts
            }
        ]
    },
    {
        path: '/adminProduct',
        ...App,
        routes: [
            {
                ...ProductAdmin
            }
        ]
    },
    {
        path: '/Services',
        ...App,
        routes: [
            {
                ...Services
            }
        ]
    },
    {
        path: '/about',
        ...App,
        routes: [
            {
                ...About
            }
        ]
    },
    {
        path: '/contact',
        ...App,
        routes: [
            {
                ...ContactPage
            }
        ]
    },
    {
        path: '/policies/terms',
        ...App,
        routes: [
            {
                ...TermsAndConditions
            }
        ]
    },
    {
        path: '/policies/privacy',
        ...App,
        routes: [
            {
                ...Privacy
            }
        ]
    },
    {
        path: '/policies/cookies',
        ...App,
        routes: [
            {
                ...CookiesPolicy
            }
        ]
    },
    {
        path: '/products',
        ...CustomLayout,
        routes: [
        {
            path: '/products/:id',
            ...ProductPage
        },
        {
            ...ProductsPage
        }
        ]
    },
    {
        path: '/',
        exact: true,
        ...HomePageLayout,
        routes: [
            {
                ...HomePage
            }
        ]
    },
    {
        path: '/',
        ...App,
        routes: [
            {
                ...NotFoundPage
            }
        ]
    }
];

