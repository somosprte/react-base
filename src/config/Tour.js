import 'hopscotch/dist/css/hopscotch.css';

export default {
  id: 'my-intro',
  steps: [
    {
      target: 'logo-tour',
      title: 'Logo',
      content: 'Essa é a logomarca do aplicativo',
      placement: 'right',
      yOffset: 10,
    },
    {
      target: 'page-title-tour',
      title: 'Título',
      content: 'Título da página',
      placement: 'bottom',
      zindex: 999,
    },
  ],
  showPrevButton: true,
};
