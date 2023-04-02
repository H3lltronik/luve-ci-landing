/* eslint-disable no-unused-vars */
export type Image = {
  src: string;
  alt: string;
};

export declare module Services {

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

    export interface Item {
        id: number;
        title: string;
        slug: string;
        order: number;
        description: string;
        targets: string[];
        features: Feature[];
        requirements: Requirement[];
        images: Image[];
        image?: Image;
    }

    export interface Service {
        id: string;
        title: string;
        slug: string;
        description: string;
        image: Image;
        priority: number;
        items: Item[];
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
