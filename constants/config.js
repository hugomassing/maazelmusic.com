const SEO = {
  description:
    "Behind Maazel lies a Paris based genre bending/multi-instrumentalist producer and DJ, mainly focusing on making emotional electronic music.",
  titleTemplate: "Maazel - Electronic music producer",
  additionalMetaTags: "",
  openGraph: {
    // what's displayed on social networks when sharing the website
    title: "Maazel - Creating Emotional Music",
    type: "website",
    url: "https://maazelmusic.com/",
    site_name: "Maazel Music",
    locale: "en_US",
    images: [
      {
        url: "http://maazelmusic.com/og-image.jpg",
        width: 800,
        height: 600,
        alt: "Maazel",
      },
    ],
  },
  twitter: {
    handle: "@maazelmusic",
    site: "@maazelmusic",
    cardType: "summary_large_image",
  },
};

const theme = {
  fontFamily: "Roboto",
  linkColor: "#000000",
  primaryColor: "#2e3d36",
  primaryGradient:
    "linear-gradient(104.29deg, #3e4390 -13.54%, #7B588D 353.63%)",
  secondaryColor: "#F2F2F2",
  backgroundColor: "#fffef7",
  headerColor: "#090909",
  footerColor: "#090909",
};

const config = {
  headerSize: "70px",
  footerSize: "70px",
  artistName: "Maazel",
  tagline: "Creating emotional music",
  actionButtonLabel: "Listen Now",
  actionButtonUrl: "https://fanlink.to/l2ma",
  backgroundUrl: "background.jpg",
  bioPicture1: "bioPic1.jpg",
  bioPicture2: "bioPic2.jpg",
  logoUrl: "logo.svg",
  reversedContactMail: "moc.qatataq@lezaam+oguh",
  htmlTitle: "Maazel",
  websiteUrl: "https://maazelmusic.com/",
  SEO: SEO,
  theme: theme,
  links: {
    facebook: "https://www.facebook.com/maazelbeats",
    twitter: "https://twitter.com/maazelbeats",
    youtube: "https://www.youtube.com/channel/UCgrx0pyWluVXzOy45yWRJTw",
    instagram: "https://www.instagram.com/maazelbeats/",
    spotify:
      "https://open.spotify.com/artist/4w5LgUT6bfJnNq6wSFbND7?si=qUQb_vdlSB6XhBog780Hyg",
    appleMusic: "https://music.apple.com/artist/maazel/1148087232",
    soundcloud: "https://soundcloud.com/maazelbeats",
  },
};

export default config;
