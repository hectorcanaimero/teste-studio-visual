export interface Data {
  menu?: Menu,
  header?: Header,
  blog?: Blog,
  parallax?: Parallax;
  footer?: Footer
}

export interface Footer {
  left?: any;
  center?: any;
  right?: any;
  copyright?: any;
}

export interface Parallax{
  img?: string;
  title?: string;
  text?: string;
  btnText?: string;
  url?: string;
}

export interface Blog{
  type?: string;
  img?: string;
  logo?: string;
  text?: string;
  link?: string;
  buttom?: string;
}

export interface Menu {
  logo?: string;
  link?: any
}

export interface Header {
  fundo?: string;
  img?: string;
  subtitle?: string;
  title?: string;
  content?: string;
}
