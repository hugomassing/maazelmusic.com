const releases = [
  {
    title: "Nobody",
    artist: "Slippy & Maazel",
    year: "2023",
    label: "NIGHTMODE",
    streamUrl: "https://nm.fanlink.to/NobodyWhiteNoise",
    artworkUrl:
      "https://i1.sndcdn.com/artworks-1CDzWz23rIrA8yMa-SPzqlg-t500x500.jpg",
    audio: "https://soundcloud.com/nightmoderecs/nobody",
  },
  {
    title: "Say Less (Maazel Remix)",
    artist: "Puppet",
    year: "2022",
    label: "Self-released",
    streamUrl: "https://ffm.to/newyorkfamilyoverdrive",
    artworkUrl:
      "https://i1.sndcdn.com/artworks-yDn9yh3LI0HeUR5C-zhiLsQ-t500x500.jpg",
    audio: "https://soundcloud.com/puppet/say-less-maazel-remix",
  },
  {
    title: "Mirrors",
    artist: "Maazel, Darby & BELELA",
    year: "2022",
    label: "Monstercat",
    streamUrl: "https://monster.cat/mirrors",
    artworkUrl:
      "https://i1.sndcdn.com/artworks-e2be8xXdiKX4fbXb-1oGvCA-t500x500.jpg",
    audio: "https://soundcloud.com/monstercat/maazel-darby-mirrors-feat-belela",
  },
  {
    title: "The Truth",
    artist: "Maazel & Sam Lamar",
    year: "2021",
    label: "Monstercat",
    streamUrl: "https://monster.cat/thetruth",
    artworkUrl:
      "https://i1.sndcdn.com/artworks-Ov486H57Hy9dXGRr-RlE6zw-t500x500.jpg",
    audio: "https://soundcloud.com/monstercat/maazel-sam-lamar-the-truth",
  },
  {
    title: "Crashing Down",
    artist: "Maazel",
    year: "2021",
    label: "Monstercat",
    streamUrl: "https://monster.cat/crashingdown",
    artworkUrl:
      "https://i1.sndcdn.com/artworks-V8LtD7N1uxFu1Ggi-c21EFg-t500x500.jpg",
    audio: "https://soundcloud.com/monstercat/maazel-crashing-down",
  },
  {
    title: "Not Me (feat. Madalen Duke)",
    artist: "So Sus & Maazel",
    year: "2021",
    label: "Monstercat",
    streamUrl: "https://monster.cat/notme",
    artworkUrl:
      "https://i1.sndcdn.com/artworks-Ihq1cn5zweQExhvQ-jVyvqw-t500x500.jpg",
    audio: "https://soundcloud.com/monstercat/so-sus-maazel-not-me-feat-madalen-duke",
  },
  {
    title: "Remember (Maazel Remix)",
    artist: "WE ARE FURY & emlyn",
    year: "2021",
    label: "Create Music Group",
    streamUrl: "https://wearefury.lnk.to/RememberMaazel",
    artworkUrl:
      "https://i1.sndcdn.com/artworks-052zy9C6YcpKamVK-bixykA-t500x500.jpg",
    audio: "https://soundcloud.com/maazelbeats/we-are-fury-emlyn-remember-maazel-remix",
  },
  {
    title: "Everybody Feels",
    artist: "ARMNHMR & Maazel feat. Zack Gray",
    year: "2021",
    label: "Dim Mak",
    streamUrl: "https://ffm.to/everybodyfeels",
    artworkUrl:
      "https://i1.sndcdn.com/artworks-SbNOHUTKN1l9SWc4-P4eWIQ-t500x500.jpg",
    audio: "https://soundcloud.com/armnhmr/everybodyfeels",
  },
  {
    title: "Another Way",
    artist: "Maazel",
    year: "2021",
    label: "Monstercat",
    streamUrl: "https://monstercat.ffm.to/anotherway-oogv",
    artworkUrl:
      "https://i1.sndcdn.com/artworks-XzZwIE4zJyQkvzYZ-lSlQnQ-t500x500.jpg",
    audio: "https://soundcloud.com/monstercat/maazel-another-way",
  },
  {
    title: "Dead Inside",
    artist: "Maazel",
    year: "2021",
    label: "Monstercat",
    streamUrl: "https://monstercat.ffm.to/deadinside-ryeo",
    artworkUrl:
      "https://i1.sndcdn.com/artworks-RZvbTc6MBpPXyYhS-tIf86g-t500x500.jpg",
    audio: "https://soundcloud.com/monstercat/maazel-dead-inside",
  },
  {
    title: "Memories EP",
    artist: "Maazel",
    year: "2020",
    label: "Monstercat",
    streamUrl: "https://monstercat.ffm.to/memories-ep-b9rd",
    artworkUrl:
      "https://i1.sndcdn.com/artworks-opfaZChN1yX6D7Mb-fKrNjQ-t500x500.jpg",
    audio: "https://soundcloud.com/monstercat/maazel-thinking-about-you",
  },
  {
    title: "Right Now",
    artist: "Maazel feat. glasscat",
    year: "2020",
    label: "Monstercat",
    streamUrl: "https://monstercat.ffm.to/rightnow-mvr1",
    artworkUrl:
      "https://i1.sndcdn.com/artworks-10eTBQjHSj8dmTkc-JxPoGw-t500x500.jpg",
    audio: "https://soundcloud.com/monstercat/maazel-glasscat-right-now",
  },
  {
    title: "Hurt Again",
    artist: "Squired & Maazel & Danni Carra",
    year: "2020",
    label: "Proximity",
    streamUrl: "https://proximity.ffm.to/hurtagain",
    artworkUrl:
      "https://i1.sndcdn.com/artworks-ZhnkJOg1yLgBcGMS-RpMRLQ-t500x500.jpg",
    audio:
      "https://soundcloud.com/proximity/squired-maazel-danni-carra-hurt-again",
  },
  {
    title: "I'm Fine (Maazel Remix)",
    artist: "William Black Feat. Nevve",
    year: "2020",
    label: "Lowly",
    streamUrl: "https://lowly.ffm.to/imfine_maazelremix",
    artworkUrl:
      "https://i1.sndcdn.com/artworks-UnQhlh2ffT2GqpDt-A9FHPg-t500x500.jpg",
    audio:
      "https://soundcloud.com/maazelbeats/william-black-feat-nevve-im-fine-maazel-remix",
  },
  {
    title: "1NIGHT (Maazel & Jupom Remix)",
    artist: "Yetep & Maazel With GLNNA",
    year: "2019",
    label: "Enhanced Music",
    streamUrl: "http://enhanced.lnk.to/Enhanced426R",
    artworkUrl:
      "https://i1.sndcdn.com/artworks-000642731236-99tp67-t500x500.jpg",
    audio:
      "https://soundcloud.com/enhanced/yetep-maazel-with-glnna-1night-maazel-jupom-remix-1",
  },
  {
    title: "Kids (Maazel Remix)",
    artist: "LIONE ft. Miranda Glory",
    year: "2019",
    label: "Musical Freedom",
    streamUrl: "https://fanlink.to/kids-maazel-remix",
    artworkUrl:
      "https://i1.sndcdn.com/artworks-000616705774-wuz0pr-t500x500.jpg",
    audio:
      "https://soundcloud.com/maazelbeats/lione-ft-miranda-glory-kids-maazel-remix",
  },
  {
    title: "1NIGHT",
    artist: "yetep & Maazel feat. GLNNA",
    year: "2019",
    label: "Enhanced Music",
    streamUrl: "https://enhanced.lnk.to/Enhanced426",
    artworkUrl:
      "https://i1.sndcdn.com/artworks-000585169310-dat7re-t500x500.jpg",
    audio:
      "https://soundcloud.com/enhanced/yetep-maazel-feat-glnna-1night-available-060919",
  },
  {
    title: "Hold On",
    artist: "Gill Chang, Maazel & Danni Carra",
    year: "2019",
    label: "found/red",
    streamUrl: "https://foundred.ffm.to/gillchang",
    artworkUrl:
      "https://i1.sndcdn.com/artworks-000578546750-i50hoi-t500x500.jpg",
    audio:
      "https://soundcloud.com/gillchang/gill-chang-maazel-danni-carra-hold-on",
  },
  {
    title: "In my Head",
    artist: "Maazel",
    year: "2019",
    label: "qatataq",
    streamUrl: "https://fanlink.to/maazel-in-my-head",
    artworkUrl:
      "https://i1.sndcdn.com/artworks-000553965648-572bhs-t500x500.jpg",
    audio: "https://soundcloud.com/maazelbeats/in-my-head",
  },
  {
    title: "Higher",
    artist: "Maazel",
    year: "2019",
    label: "qatataq",
    streamUrl: "https://fanlink.to/maazel-higher",
    artworkUrl:
      "https://i1.sndcdn.com/artworks-000497074788-iywces-t500x500.jpg",
    audio: "https://soundcloud.com/maazelbeats/higher",
  },
  {
    title: "Fire",
    artist: "Maazel",
    year: "2018",
    label: "qatataq",
    streamUrl: "https://fanlink.to/maazel-fire",
    artworkUrl:
      "https://i1.sndcdn.com/artworks-000396048150-d073n8-t500x500.jpg",
    audio: "https://soundcloud.com/maazelbeats/fire",
  },
  {
    title: "Red Moon",
    artist: "Maazel",
    year: "2018",
    label: "qatataq",
    streamUrl: "https://fanlink.to/maazel-red-moon",
    artworkUrl:
      "https://i1.sndcdn.com/artworks-000357937740-5vo2s0-t500x500.jpg",
    audio: "https://soundcloud.com/maazelbeats/red-moon",
  },
  {
    title: "Lost Boys",
    artist: "graves & Maazel",
    year: "2016",
    label: "Self-Released",
    streamUrl: "https://soundcloud.com/wearegraves/graves-maazel-lost-boys",
    artworkUrl:
      "https://i1.sndcdn.com/artworks-000181113808-55xw7p-t500x500.jpg",
    audio: "https://soundcloud.com/wearegraves/graves-maazel-lost-boys",
  },
  {
    title: "Bliss",
    artist: "Maazel",
    year: "2016",
    label: "qatataq",
    streamUrl: "https://fanlink.to/maazel-bliss",
    artworkUrl:
      "https://i1.sndcdn.com/artworks-000175601015-4yo4ya-t500x500.jpg",
    audio: "https://soundcloud.com/maazelbeats/bliss",
  },
];

export default releases;
