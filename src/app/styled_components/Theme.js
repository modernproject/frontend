const colors = {
  white: '#FFFFFF',
  grey50: '#FAFAFA',
  grey100: '#F5F5F5',
  grey200: '#EEEEEE',
  grey300: '#E0E0E0',
  grey400: '#BDBDBD',
  grey500: '#9E9E9E',
  grey600: '#757575',
  grey700: '#616161',
  grey800: '#424242',
  grey900: '#212121',
  black: '#000000',
  blue: '#1565C0',
  green: '#388E3C',
  amber: '#FFC107',
  red: '#D50000'
}

const mediaQueries = {
  phone: '37.5rem', //600px
  tabletPortrait: '37.5rem', //600px
  tabletLandscape: '56.25rem', //900px
  desktop: '75rem', //1200px
  desktopLarge: '112.5rem' //1800px
}

const Theme = {
  colors: colors,
  mediaQueries: mediaQueries,
  NavBar: {
    backgroundColor: colors.white,
    color: colors.white
  },
  DropDown: {
    backgroundColor: colors.grey50,
    color: colors.black,
    hoverColor: colors.grey200
  },
  SideBar: {
    backgroundColor: colors.grey100,
    color: colors.black
  },
  Footer: {
    backgroundColor: colors.grey800,
    color: colors.grey700
  }
}

export default Theme
