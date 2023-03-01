export type Image = {
  src: string;
  alt: string;
};

declare module Services {
  export interface Icon {
    type: string;
    name: string;
  }

  export interface Feature {
    title: string;
    icon: Icon;
  }

  export interface Icon2 {
    type: string;
    name: string;
  }

  export interface Requirement {
    title: string;
    icon: Icon2;
  }

  export interface Image {
    src: string;
    alt: string;
  }

  export interface Service {
    id: number;
    title: string;
    description: string;
    target: string[];
    order: number;
    features: Feature[];
    requirements: Requirement[];
    images: Image[];
  }
}

declare module Header {

  export interface Link {
      label: string;
      path: string;
      type: string;
      order: number;
      children?: Link[];
  }

  export interface Data {
      links: Link[];
  }

}
