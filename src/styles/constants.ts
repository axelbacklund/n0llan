export type Color = 'porter' | 'darkBlue' | 'darkRed' | 'gray'

const colors: Record<Color, string> = {
  porter: '#785B42',
  darkBlue: '#153C3C',
  darkRed: '#773F41',
  gray: '#F2EFED',
}

const spacings = {
  vertical: '3.5rem',
  horizontal: '2rem',
}

const breakpointsDown = {
  mobile: '(max-width: 420px)',
  middle: '(max-width: 580px)',
  tablet: '(max-width: 740px)',
  desktop: '(max-width: 980px)',
  wide: '(max-width: 1300px)',
}

const fonts = {
  souvenir: "'Souvenir', serif",
  termina: "'Termina', sans-serif",
  karla: "'Karla', sans-serif",
}

export { colors, spacings, fonts, breakpointsDown }
