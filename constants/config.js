const SEO = {
  description:
    "Behind Maazel lies a Paris-based genre-bending/multi-instrumentalist producer that started the project in 2015, mainly focusing on making emotional electronic music. His experience in guitar enabled him to break the boundaries of genres and allowed him to develop his unique and recognizable style.",
  titleTemplate: "Maazel | %s",
  additionalMetaTags: "",
  openGraph: {
    // what's displayed on social networks when sharing the website
    title: "Maazel - Creating Emotional Music",
    type: "website",
    url: "https://www.maazelmusic.com/",
    site_name: "Maazel Music",
    locale: "en_US",
    images: [
      {
        url:
          "https://www.maazelmusic.com/static/og-image.jpg",
        width: 800,
        height: 600,
        alt: "Og Image Alt"
      }
    ]
  },
  twitter: {
    handle: "@maazelmusic",
    site: "@maazelmusic",
    cardType: "summary_large_image"
  }
};

const theme = {
  fontFamily: "Roboto",
  linkColor: "#000000",
  primaryColor: "#090909",
  secondaryColor: "#F2F2F2",
  headerColor: "#090909",
  footerColor: "#090909"
};

const config = {
  headerSize: "70px",
  footerSize: "70px",
  artistName: "Maazel",
  tagline: "Creating emotional music",
  actionButtonLabel: "Listen Now",
  actionButtonUrl: "https://fanlink.to/l2ma",
  backgroundUrl: "static/background.jpg",
  bioPicture1: "static/bioPic1.jpg",
  bioPicture2: "static/bioPic2.jpg",
  logoUrl: "static/logo.svg",
  contactMail: "hugo@qatataq.com",
  htmlTitle: "Maazel",
  websiteUrl: "https://www.maazelmusic.com/",
  SEO: SEO,
  theme: theme,
  links: {
    facebook: "https://www.facebook.com/maazelbeats",
    twitter: "https://twitter.com/maazelbeats",
    youtube: "https://www.youtube.com/channel/UCgrx0pyWluVXzOy45yWRJTw",
    instagram: "https://www.instagram.com/maazelbeats/",
    spotify:
      "https://open.spotify.com/artist/4w5LgUT6bfJnNq6wSFbND7?si=qUQb_vdlSB6XhBog780Hyg",
    appleMusic: "https://music.apple.com/fr/artist/maazel/1148087232",
    soundcloud: "https://soundcloud.com/maazelbeats"
  }
};

export default config;
