import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { v4 as uuidv4 } from "uuid"

export const locations = [
  {
    id: uuidv4(),
    googlePlaceId: process.env.GATSBY_MAUMELLE_ID,
    img: (
      <StaticImage
        src="../images/Maumelle/maumelle-pano.jpg"
        alt="Maumelle Store"
        layout="fullWidth"
      />
    ),
    gallery: [
      <StaticImage
        src="../images/Maumelle/maumelle-pano.jpg"
        alt="Maumelle Store"
        layout="fullWidth"
      />,
      <StaticImage
        src="../images/Maumelle/maumelle-outside.jpg"
        alt="Maumelle Store"
        layout="fullWidth"
      />,
      <StaticImage
        src="../images/Maumelle/maumelle-store-1.jpg"
        alt="Maumelle Store"
        layout="fullWidth"
      />,
      <StaticImage
        src="../images/Maumelle/maumelle-store-2.jpg"
        alt="Maumelle Store"
        layout="fullWidth"
      />,
      <StaticImage
        src="../images/Maumelle/maumelle-store-3.jpg"
        alt="Maumelle Store"
        layout="fullWidth"
      />,
      <StaticImage
        src="../images/Maumelle/maumelle-store-4.jpg"
        alt="Maumelle Store"
        layout="fullWidth"
      />,
    ],
    name: "Maumelle",
    phone: "(501) 400-8358",
    phonelink: "5014008358",
    address: "9807 Maumelle Blvd, Maumelle, AR 72113",
    hours: ["Sun: 11pm - 7pm", "Mon - Sat: 10am - 8pm"],
    lat: "34.82258309493743",
    lng: "-92.37022047994269",
    active: false,
    slug: "maumelle",
  },
  {
    id: uuidv4(),
    googlePlaceId: process.env.GATSBY_UNIVERSITY_ID,
    img: (
      <StaticImage
        src="../images/ARUniversity/ar_uni-store-2.jpg"
        alt="University Ave Store"
        layout="fullWidth"
      />
    ),
    gallery: [
      <StaticImage
        src="../images/ARUniversity/ar_uni-store-2.jpg"
        alt="University Ave Store"
        layout="fullWidth"
      />,
      <StaticImage
        src="../images/ARUniversity/ar_uni-store-1.jpg"
        alt="University Ave Store"
        layout="fullWidth"
      />,
      <StaticImage
        src="../images/ARUniversity/ar_uni-store-3.jpg"
        alt="University Ave Store"
        layout="fullWidth"
      />,
      <StaticImage
        src="../images/ARUniversity/ar_uni-store-4.jpg"
        alt="University Ave Store"
        layout="fullWidth"
      />,
      <StaticImage
        src="../images/ARUniversity/ar_uni-store-5.jpg"
        alt="University Ave Store"
        layout="fullWidth"
      />,
    ],
    name: "University Ave",
    phone: "(501) 614-6400",
    phonelink: "5016146400",
    address: "1400 S University Ave J, Little Rock, AR 72204",
    hours: ["Sun: 11pm - 7pm", "Mon - Sat: 10am - 8pm"],
    lat: "34.73889731200156",
    lng: "-92.34197102973047",
    active: false,
    slug: "university",
  },
  {
    id: uuidv4(),
    googlePlaceId: process.env.GATSBY_OTTERCREEK_ID,
    img: (
      <StaticImage
        src="../images/OtterCreek/otter_creek-pano.jpg"
        alt="Otter Creek Store"
        layout="fullWidth"
      />
    ),
    gallery: [
      <StaticImage
        src="../images/OtterCreek/otter_creek-pano.jpg"
        alt="Otter Creek Store"
        layout="fullWidth"
      />,
      <StaticImage
        src="../images/OtterCreek/otter_creek-outside.jpg"
        alt="Otter Creek Store"
        layout="fullWidth"
      />,
      <StaticImage
        src="../images/OtterCreek/otter_creek-store-1.jpg"
        alt="Otter Creek Store"
        layout="fullWidth"
      />,
      <StaticImage
        src="../images/OtterCreek/otter_creek-store-2.jpg"
        alt="Otter Creek Store"
        layout="fullWidth"
      />,
      <StaticImage
        src="../images/OtterCreek/otter_creek-store-3.jpg"
        alt="Otter Creek Store"
        layout="fullWidth"
      />,
      <StaticImage
        src="../images/OtterCreek/otter_creek-store-4.jpg"
        alt="Otter Creek Store"
        layout="fullWidth"
      />,
      <StaticImage
        src="../images/OtterCreek/otter_creek-store-5.jpg"
        alt="Otter Creek Store"
        layout="fullWidth"
      />,
      <StaticImage
        src="../images/OtterCreek/otter_creek-store-6.jpg"
        alt="Otter Creek Store"
        layout="fullWidth"
      />,
    ],
    name: "Otter Creek",
    phone: "(501) 476-3177",
    phonelink: "5014763177",
    address: "10400 Stagecoach Rd, Little Rock, AR 72210",
    hours: [
      "Sun: 11pm - 7pm",
      "Mon - Thurs: 9am - 8pm",
      "Fri & Sat: 9am - 9pm",
    ],
    lat: "34.65672750263045",
    lng: "-92.42679890133392",
    active: false,
    slug: "otter-creek",
  },
  {
    id: uuidv4(),
    img: (
      <StaticImage
        src="../images/image-placeholder.png"
        alt="Cabot Store"
        layout="fixed"
        width={200}
        height={200}
        style={{ justifySelf: "center" }}
        transformOptions={{ trim: 10 }}
      />
    ),
    gallery: [],
    name: "Cabot",
    phone: "",
    phonelink: "",
    address: "2006 South Pine St Suite F, Cabot, AR 72023",
    hours: [
      "Sun: 12pm - 7pm",
      "Mon - Thurs: 9am - 8pm",
      "Fri & Sat: 9am - 9pm",
    ],
    lat: "34.943645606008616",
    lng: "-92.00911183761357",
    active: false,
    slug: "cabot",
  },
  {
    id: uuidv4(),
    googlePlaceId: process.env.GATSBY_SHERWOOD_ID,
    img: (
      <StaticImage
        src="../images/image-placeholder.png"
        alt="Sherwood Store"
        layout="fixed"
        width={200}
        height={200}
        style={{ justifySelf: "center" }}
        transformOptions={{ trim: 10 }}
      />
    ),
    gallery: [],
    name: "Sherwood",
    phone: "(501) 819-6954",
    phonelink: "5018196954",
    address: "3920 E Kiehl Ave #1, Sherwood, AR 72120",
    hours: [
      "Sun: 12pm - 7pm",
      "Mon - Thurs: 9am - 8pm",
      "Fri & Sat: 9am - 9pm",
    ],
    lat: "34.83185459399566",
    lng: "-92.18920150531893",
    active: false,
    slug: "sherwood",
  },
  {
    id: uuidv4(),
    googlePlaceId: process.env.GATSBY_JACKSONVILLE_ID,
    img: (
      <StaticImage
        src="../images/image-placeholder.png"
        alt="Jacksonville Store"
        layout="fixed"
        width={200}
        height={200}
        style={{ justifySelf: "center" }}
        transformOptions={{ trim: 10 }}
      />
    ),
    gallery: [],
    name: "Jacksonville",
    phone: "",
    phonelink: "",
    address: "640 W Main St #640, Jacksonville, AR 72076",
    hours: [
      "Sun: 11pm - 7pm",
      "Mon - Thurs: 9am - 8pm",
      "Fri & Sat: 9am - 9pm",
    ],
    lat: "34.86841286319381",
    lng: "-92.11741122422272",
    active: false,
    slug: "jacksonville",
  },
  {
    id: uuidv4(),
    googlePlaceId: process.env.GATSBY_TEXARKANA_ID,
    img: (
      <StaticImage
        src="../images/image-placeholder.png"
        alt="Texarkana Store"
        layout="fixed"
        width={200}
        height={200}
        style={{ justifySelf: "center" }}
        transformOptions={{ trim: 10 }}
      />
    ),
    gallery: [],
    name: "Texarkana",
    phone: "(903) 831-0269",
    phonelink: "9038310269",
    address: "3601 N State Line Ave, Texarkana, TX 75503",
    hours: [
      "Sun: 12pm - 7pm",
      "Mon - Thurs: 9am - 8pm",
      "Fri & Sat: 9am - 9pm",
    ],
    lat: "33.46111546617134",
    lng: "-94.03023398328624",
    active: false,
    slug: "texarkana",
  },
]
