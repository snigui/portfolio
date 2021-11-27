
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog','26c'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive','f4c'),
    exact: true
  },
  {
    path: '/blog/auto',
    component: ComponentCreator('/blog/auto','d70'),
    exact: true
  },
  {
    path: '/blog/Breakthrough Junior Challenge Videos',
    component: ComponentCreator('/blog/Breakthrough Junior Challenge Videos','4bf'),
    exact: true
  },
  {
    path: '/blog/sean carroll!',
    component: ComponentCreator('/blog/sean carroll!','810'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags','e13'),
    exact: true
  },
  {
    path: '/blog/tags/animation',
    component: ComponentCreator('/blog/tags/animation','43a'),
    exact: true
  },
  {
    path: '/blog/tags/art',
    component: ComponentCreator('/blog/tags/art','8fc'),
    exact: true
  },
  {
    path: '/blog/tags/music',
    component: ComponentCreator('/blog/tags/music','667'),
    exact: true
  },
  {
    path: '/blog/tags/noteworthy',
    component: ComponentCreator('/blog/tags/noteworthy','885'),
    exact: true
  },
  {
    path: '/blog/tags/python',
    component: ComponentCreator('/blog/tags/python','001'),
    exact: true
  },
  {
    path: '/blog/tags/science',
    component: ComponentCreator('/blog/tags/science','b96'),
    exact: true
  },
  {
    path: '/blog/tags/videos',
    component: ComponentCreator('/blog/tags/videos','e4a'),
    exact: true
  },
  {
    path: '/blog/tags/voice-note',
    component: ComponentCreator('/blog/tags/voice-note','53a'),
    exact: true
  },
  {
    path: '/blog/tags/web-scraping',
    component: ComponentCreator('/blog/tags/web-scraping','571'),
    exact: true
  },
  {
    path: '/blog/Videos of Audios',
    component: ComponentCreator('/blog/Videos of Audios','d6d'),
    exact: true
  },
  {
    path: '/blog/voicenote',
    component: ComponentCreator('/blog/voicenote','dc0'),
    exact: true
  },
  {
    path: '/portfolio',
    component: ComponentCreator('/portfolio','1b5'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs','87e'),
    routes: [
      {
        path: '/docs/credentials',
        component: ComponentCreator('/docs/credentials','bc7'),
        exact: true,
        'sidebar': "portfolioSidebar"
      },
      {
        path: '/docs/doc1',
        component: ComponentCreator('/docs/doc1','e77'),
        exact: true,
        'sidebar': "portfolioSidebar"
      },
      {
        path: '/docs/doc2',
        component: ComponentCreator('/docs/doc2','a0f'),
        exact: true,
        'sidebar': "portfolioSidebar"
      },
      {
        path: '/docs/doc3',
        component: ComponentCreator('/docs/doc3','78b'),
        exact: true,
        'sidebar': "portfolioSidebar"
      },
      {
        path: '/docs/doc4',
        component: ComponentCreator('/docs/doc4','d60'),
        exact: true,
        'sidebar': "portfolioSidebar"
      },
      {
        path: '/docs/doc5',
        component: ComponentCreator('/docs/doc5','537'),
        exact: true,
        'sidebar': "portfolioSidebar"
      },
      {
        path: '/docs/Education/edu',
        component: ComponentCreator('/docs/Education/edu','f01'),
        exact: true,
        'sidebar': "portfolioSidebar"
      },
      {
        path: '/docs/Work/wrk',
        component: ComponentCreator('/docs/Work/wrk','703'),
        exact: true,
        'sidebar': "portfolioSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/','deb'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
