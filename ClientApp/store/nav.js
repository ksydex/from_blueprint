export const state = () => ({
  links: [
    {
      id: 0,
      title: 'Главная',
      to: '/'
    },
    {
      id: 1,
      title: 'Предложения',
      to: '/houses'
    },
    {
      id: 2,
      title: 'Проекты',
      to: '/projects'
    },
    {
      id: 3,
      title: 'О нас',
      to: '/about'
    }
  ]
})

export const getters = {
  GET_LINKS: state => state.links
}
