(function(){
    var script = {
 "downloadEnabled": false,
 "start": "this.playAudioList([this.audio_D5326642_C03A_CEAC_41B3_C911E2823D4D]); this.init()",
 "children": [
  "this.MainViewer"
 ],
 "borderSize": 0,
 "id": "rootPlayer",
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "visible",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "desktopMipmappingEnabled": false,
 "definitions": [{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 73.93,
  "pitch": 0.92
 },
 "id": "camera_C93541BD_C54C_1ED9_41E3_D7D5F34985AA",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -154.63,
  "pitch": 0
 },
 "id": "camera_C8434276_C54C_6268_41E0_676432239A8C",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_B4C985AA_BF93_638F_41E0_7AF476D30F1A",
   "camera": "this.panorama_B4C985AA_BF93_638F_41E0_7AF476D30F1A_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_B5D67AE0_BF93_21BB_41C7_B76BB08A0CA8",
   "camera": "this.panorama_B5D67AE0_BF93_21BB_41C7_B76BB08A0CA8_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_B5A7F8E9_BF92_E18A_41E6_6A5542719992",
   "camera": "this.panorama_B5A7F8E9_BF92_E18A_41E6_6A5542719992_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_B5DD376E_BF92_E086_41E5_C7EB935F4A0A",
   "camera": "this.panorama_B5DD376E_BF92_E086_41E5_C7EB935F4A0A_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_B5A62561_BF91_20BA_41AE_1C8F4CC4FFE9",
   "camera": "this.panorama_B5A62561_BF91_20BA_41AE_1C8F4CC4FFE9_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_B5D863B9_BF91_278A_41CB_31AE29583BC1",
   "camera": "this.panorama_B5D863B9_BF91_278A_41CB_31AE29583BC1_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_B5D89010_BF91_609B_41E3_FF902C74FA24",
   "camera": "this.panorama_B5D89010_BF91_609B_41E3_FF902C74FA24_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_B5A66DCB_BF91_638D_41D7_8F6AC1F2F8DD",
   "camera": "this.panorama_B5A66DCB_BF91_638D_41D7_8F6AC1F2F8DD_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_B5D51BB5_BF91_279A_41E7_236AE5AE0FBB",
   "end": "this.trigger('tourEnded')",
   "camera": "this.panorama_B5D51BB5_BF91_279A_41E7_236AE5AE0FBB_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 0)",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "mainPlayList"
},
{
 "label": "navepark_03E",
 "id": "panorama_B5DD376E_BF92_E086_41E5_C7EB935F4A0A",
 "pitch": 0,
 "partial": false,
 "hfovMin": "135%",
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "url": "media/panorama_B5DD376E_BF92_E086_41E5_C7EB935F4A0A_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "url": "media/panorama_B5DD376E_BF92_E086_41E5_C7EB935F4A0A_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_B5DD376E_BF92_E086_41E5_C7EB935F4A0A_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "url": "media/panorama_B5DD376E_BF92_E086_41E5_C7EB935F4A0A_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "url": "media/panorama_B5DD376E_BF92_E086_41E5_C7EB935F4A0A_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_B5DD376E_BF92_E086_41E5_C7EB935F4A0A_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "url": "media/panorama_B5DD376E_BF92_E086_41E5_C7EB935F4A0A_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "url": "media/panorama_B5DD376E_BF92_E086_41E5_C7EB935F4A0A_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_B5DD376E_BF92_E086_41E5_C7EB935F4A0A_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "url": "media/panorama_B5DD376E_BF92_E086_41E5_C7EB935F4A0A_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "url": "media/panorama_B5DD376E_BF92_E086_41E5_C7EB935F4A0A_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_B5DD376E_BF92_E086_41E5_C7EB935F4A0A_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "url": "media/panorama_B5DD376E_BF92_E086_41E5_C7EB935F4A0A_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "url": "media/panorama_B5DD376E_BF92_E086_41E5_C7EB935F4A0A_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_B5DD376E_BF92_E086_41E5_C7EB935F4A0A_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B5DD376E_BF92_E086_41E5_C7EB935F4A0A_t.jpg",
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "url": "media/panorama_B5DD376E_BF92_E086_41E5_C7EB935F4A0A_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "url": "media/panorama_B5DD376E_BF92_E086_41E5_C7EB935F4A0A_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_B5DD376E_BF92_E086_41E5_C7EB935F4A0A_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "cardboardMenu": "this.Menu_C92F718E_C54C_1EBB_41E7_EF0DEDA9A110",
 "thumbnailUrl": "media/panorama_B5DD376E_BF92_E086_41E5_C7EB935F4A0A_t.jpg",
 "hfov": 360,
 "class": "Panorama",
 "overlays": [
  "this.overlay_AFA803E4_BFB1_27BA_41E3_05AD97413B17",
  "this.overlay_ADE0AB57_BFB2_E086_41DE_2744B6C51FF4",
  "this.overlay_AE21C2B7_BFB3_2185_41D4_4ED3E89C1B8E"
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B5D89010_BF91_609B_41E3_FF902C74FA24"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B5D863B9_BF91_278A_41CB_31AE29583BC1"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B5D67AE0_BF93_21BB_41C7_B76BB08A0CA8"
  }
 ],
 "vfov": 180
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_B5D51BB5_BF91_279A_41E7_236AE5AE0FBB_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "label": "navepark_04D",
 "id": "panorama_B5A62561_BF91_20BA_41AE_1C8F4CC4FFE9",
 "pitch": 0,
 "partial": false,
 "hfovMin": "135%",
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "url": "media/panorama_B5A62561_BF91_20BA_41AE_1C8F4CC4FFE9_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "url": "media/panorama_B5A62561_BF91_20BA_41AE_1C8F4CC4FFE9_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_B5A62561_BF91_20BA_41AE_1C8F4CC4FFE9_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "url": "media/panorama_B5A62561_BF91_20BA_41AE_1C8F4CC4FFE9_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "url": "media/panorama_B5A62561_BF91_20BA_41AE_1C8F4CC4FFE9_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_B5A62561_BF91_20BA_41AE_1C8F4CC4FFE9_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "url": "media/panorama_B5A62561_BF91_20BA_41AE_1C8F4CC4FFE9_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "url": "media/panorama_B5A62561_BF91_20BA_41AE_1C8F4CC4FFE9_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_B5A62561_BF91_20BA_41AE_1C8F4CC4FFE9_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "url": "media/panorama_B5A62561_BF91_20BA_41AE_1C8F4CC4FFE9_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "url": "media/panorama_B5A62561_BF91_20BA_41AE_1C8F4CC4FFE9_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_B5A62561_BF91_20BA_41AE_1C8F4CC4FFE9_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "url": "media/panorama_B5A62561_BF91_20BA_41AE_1C8F4CC4FFE9_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "url": "media/panorama_B5A62561_BF91_20BA_41AE_1C8F4CC4FFE9_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_B5A62561_BF91_20BA_41AE_1C8F4CC4FFE9_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B5A62561_BF91_20BA_41AE_1C8F4CC4FFE9_t.jpg",
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "url": "media/panorama_B5A62561_BF91_20BA_41AE_1C8F4CC4FFE9_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "url": "media/panorama_B5A62561_BF91_20BA_41AE_1C8F4CC4FFE9_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_B5A62561_BF91_20BA_41AE_1C8F4CC4FFE9_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "cardboardMenu": "this.Menu_C92F718E_C54C_1EBB_41E7_EF0DEDA9A110",
 "thumbnailUrl": "media/panorama_B5A62561_BF91_20BA_41AE_1C8F4CC4FFE9_t.jpg",
 "hfov": 360,
 "class": "Panorama",
 "overlays": [
  "this.overlay_AE2CC302_BFBF_207E_41B5_79B7A1526529",
  "this.overlay_AC2FFF16_BFBF_E086_41D9_0F09ED71D08A"
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B5A66DCB_BF91_638D_41D7_8F6AC1F2F8DD"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B5D863B9_BF91_278A_41CB_31AE29583BC1"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B5D863B9_BF91_278A_41CB_31AE29583BC1"
  }
 ],
 "vfov": 180
},
{
 "label": "navepark_03D",
 "id": "panorama_B5A7F8E9_BF92_E18A_41E6_6A5542719992",
 "pitch": 0,
 "partial": false,
 "hfovMin": "135%",
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "url": "media/panorama_B5A7F8E9_BF92_E18A_41E6_6A5542719992_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "url": "media/panorama_B5A7F8E9_BF92_E18A_41E6_6A5542719992_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_B5A7F8E9_BF92_E18A_41E6_6A5542719992_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "url": "media/panorama_B5A7F8E9_BF92_E18A_41E6_6A5542719992_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "url": "media/panorama_B5A7F8E9_BF92_E18A_41E6_6A5542719992_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_B5A7F8E9_BF92_E18A_41E6_6A5542719992_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "url": "media/panorama_B5A7F8E9_BF92_E18A_41E6_6A5542719992_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "url": "media/panorama_B5A7F8E9_BF92_E18A_41E6_6A5542719992_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_B5A7F8E9_BF92_E18A_41E6_6A5542719992_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "url": "media/panorama_B5A7F8E9_BF92_E18A_41E6_6A5542719992_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "url": "media/panorama_B5A7F8E9_BF92_E18A_41E6_6A5542719992_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_B5A7F8E9_BF92_E18A_41E6_6A5542719992_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "url": "media/panorama_B5A7F8E9_BF92_E18A_41E6_6A5542719992_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "url": "media/panorama_B5A7F8E9_BF92_E18A_41E6_6A5542719992_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_B5A7F8E9_BF92_E18A_41E6_6A5542719992_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B5A7F8E9_BF92_E18A_41E6_6A5542719992_t.jpg",
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "url": "media/panorama_B5A7F8E9_BF92_E18A_41E6_6A5542719992_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "url": "media/panorama_B5A7F8E9_BF92_E18A_41E6_6A5542719992_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_B5A7F8E9_BF92_E18A_41E6_6A5542719992_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "cardboardMenu": "this.Menu_C92F718E_C54C_1EBB_41E7_EF0DEDA9A110",
 "thumbnailUrl": "media/panorama_B5A7F8E9_BF92_E18A_41E6_6A5542719992_t.jpg",
 "hfov": 360,
 "class": "Panorama",
 "overlays": [
  "this.overlay_AFA6304D_BFB7_2085_41E5_C538FF468EFF"
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B5A62561_BF91_20BA_41AE_1C8F4CC4FFE9"
  }
 ],
 "vfov": 180
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_B5D67AE0_BF93_21BB_41C7_B76BB08A0CA8_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "displayOriginPosition": {
  "class": "RotationalCameraDisplayPosition",
  "yaw": 0,
  "stereographicFactor": 1,
  "hfov": 165,
  "pitch": -90
 },
 "id": "panorama_B4C985AA_BF93_638F_41E0_7AF476D30F1A_camera",
 "displayMovements": [
  {
   "class": "TargetRotationalCameraDisplayMovement",
   "duration": 1000,
   "easing": "linear"
  },
  {
   "class": "TargetRotationalCameraDisplayMovement",
   "duration": 3000,
   "targetPitch": 0,
   "targetStereographicFactor": 0,
   "easing": "cubic_in_out"
  }
 ],
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_B5A62561_BF91_20BA_41AE_1C8F4CC4FFE9_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -2.3,
  "pitch": -15.61
 },
 "id": "camera_C9F9B221_C54C_1DE8_41CD_CF1D3CF69FF8",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -172.65,
  "pitch": 3.67
 },
 "id": "camera_C84D8262_C54C_626B_41D9_0E83AA62C544",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_B5D863B9_BF91_278A_41CB_31AE29583BC1_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "label": "navepark_04E",
 "id": "panorama_B5D863B9_BF91_278A_41CB_31AE29583BC1",
 "pitch": 0,
 "partial": false,
 "hfovMin": "135%",
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "url": "media/panorama_B5D863B9_BF91_278A_41CB_31AE29583BC1_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "url": "media/panorama_B5D863B9_BF91_278A_41CB_31AE29583BC1_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_B5D863B9_BF91_278A_41CB_31AE29583BC1_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "url": "media/panorama_B5D863B9_BF91_278A_41CB_31AE29583BC1_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "url": "media/panorama_B5D863B9_BF91_278A_41CB_31AE29583BC1_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_B5D863B9_BF91_278A_41CB_31AE29583BC1_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "url": "media/panorama_B5D863B9_BF91_278A_41CB_31AE29583BC1_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "url": "media/panorama_B5D863B9_BF91_278A_41CB_31AE29583BC1_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_B5D863B9_BF91_278A_41CB_31AE29583BC1_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "url": "media/panorama_B5D863B9_BF91_278A_41CB_31AE29583BC1_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "url": "media/panorama_B5D863B9_BF91_278A_41CB_31AE29583BC1_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_B5D863B9_BF91_278A_41CB_31AE29583BC1_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "url": "media/panorama_B5D863B9_BF91_278A_41CB_31AE29583BC1_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "url": "media/panorama_B5D863B9_BF91_278A_41CB_31AE29583BC1_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_B5D863B9_BF91_278A_41CB_31AE29583BC1_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B5D863B9_BF91_278A_41CB_31AE29583BC1_t.jpg",
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "url": "media/panorama_B5D863B9_BF91_278A_41CB_31AE29583BC1_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "url": "media/panorama_B5D863B9_BF91_278A_41CB_31AE29583BC1_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_B5D863B9_BF91_278A_41CB_31AE29583BC1_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "cardboardMenu": "this.Menu_C92F718E_C54C_1EBB_41E7_EF0DEDA9A110",
 "thumbnailUrl": "media/panorama_B5D863B9_BF91_278A_41CB_31AE29583BC1_t.jpg",
 "hfov": 360,
 "class": "Panorama",
 "overlays": [
  "this.overlay_AE69B591_BFB1_239D_41DF_CF63D49FC31C",
  "this.overlay_ACB10609_BFB3_608D_41E7_15CD875913D4"
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B5DD376E_BF92_E086_41E5_C7EB935F4A0A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B5A62561_BF91_20BA_41AE_1C8F4CC4FFE9"
  }
 ],
 "vfov": 180
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 13.81,
  "pitch": 0
 },
 "id": "camera_C9AE424B_C54C_1DB8_41D9_448A0DCC05CB",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -82.65,
  "pitch": -9.64
 },
 "id": "camera_C9EB9202_C54C_1DAB_41BE_4960A33A6442",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -86.33,
  "pitch": -16.99
 },
 "id": "camera_C9BDD258_C54C_1DA7_41DF_7C614B73F985",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_B5A7F8E9_BF92_E18A_41E6_6A5542719992_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "label": "navepark_06E",
 "id": "panorama_B5D51BB5_BF91_279A_41E7_236AE5AE0FBB",
 "pitch": 0,
 "partial": false,
 "hfovMin": "135%",
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "url": "media/panorama_B5D51BB5_BF91_279A_41E7_236AE5AE0FBB_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "url": "media/panorama_B5D51BB5_BF91_279A_41E7_236AE5AE0FBB_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_B5D51BB5_BF91_279A_41E7_236AE5AE0FBB_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "url": "media/panorama_B5D51BB5_BF91_279A_41E7_236AE5AE0FBB_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "url": "media/panorama_B5D51BB5_BF91_279A_41E7_236AE5AE0FBB_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_B5D51BB5_BF91_279A_41E7_236AE5AE0FBB_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "url": "media/panorama_B5D51BB5_BF91_279A_41E7_236AE5AE0FBB_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "url": "media/panorama_B5D51BB5_BF91_279A_41E7_236AE5AE0FBB_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_B5D51BB5_BF91_279A_41E7_236AE5AE0FBB_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "url": "media/panorama_B5D51BB5_BF91_279A_41E7_236AE5AE0FBB_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "url": "media/panorama_B5D51BB5_BF91_279A_41E7_236AE5AE0FBB_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_B5D51BB5_BF91_279A_41E7_236AE5AE0FBB_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "url": "media/panorama_B5D51BB5_BF91_279A_41E7_236AE5AE0FBB_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "url": "media/panorama_B5D51BB5_BF91_279A_41E7_236AE5AE0FBB_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_B5D51BB5_BF91_279A_41E7_236AE5AE0FBB_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B5D51BB5_BF91_279A_41E7_236AE5AE0FBB_t.jpg",
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "url": "media/panorama_B5D51BB5_BF91_279A_41E7_236AE5AE0FBB_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "url": "media/panorama_B5D51BB5_BF91_279A_41E7_236AE5AE0FBB_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_B5D51BB5_BF91_279A_41E7_236AE5AE0FBB_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "cardboardMenu": "this.Menu_C92F718E_C54C_1EBB_41E7_EF0DEDA9A110",
 "thumbnailUrl": "media/panorama_B5D51BB5_BF91_279A_41E7_236AE5AE0FBB_t.jpg",
 "hfov": 360,
 "class": "Panorama",
 "overlays": [
  "this.overlay_ADB6D426_BFB1_E086_41DE_E14545C06A8B"
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B5D89010_BF91_609B_41E3_FF902C74FA24"
  }
 ],
 "vfov": 180
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_B5D89010_BF91_609B_41E3_FF902C74FA24_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 100.56,
  "pitch": -15.61
 },
 "id": "camera_C99FA239_C54C_1DD8_41C9_FACDD1C4B8D1",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "label": "navepark_01",
 "id": "panorama_B4C985AA_BF93_638F_41E0_7AF476D30F1A",
 "pitch": 0,
 "partial": false,
 "hfovMin": "135%",
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "url": "media/panorama_B4C985AA_BF93_638F_41E0_7AF476D30F1A_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "url": "media/panorama_B4C985AA_BF93_638F_41E0_7AF476D30F1A_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_B4C985AA_BF93_638F_41E0_7AF476D30F1A_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "url": "media/panorama_B4C985AA_BF93_638F_41E0_7AF476D30F1A_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "url": "media/panorama_B4C985AA_BF93_638F_41E0_7AF476D30F1A_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_B4C985AA_BF93_638F_41E0_7AF476D30F1A_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "url": "media/panorama_B4C985AA_BF93_638F_41E0_7AF476D30F1A_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "url": "media/panorama_B4C985AA_BF93_638F_41E0_7AF476D30F1A_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_B4C985AA_BF93_638F_41E0_7AF476D30F1A_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "url": "media/panorama_B4C985AA_BF93_638F_41E0_7AF476D30F1A_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "url": "media/panorama_B4C985AA_BF93_638F_41E0_7AF476D30F1A_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_B4C985AA_BF93_638F_41E0_7AF476D30F1A_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "url": "media/panorama_B4C985AA_BF93_638F_41E0_7AF476D30F1A_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "url": "media/panorama_B4C985AA_BF93_638F_41E0_7AF476D30F1A_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_B4C985AA_BF93_638F_41E0_7AF476D30F1A_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B4C985AA_BF93_638F_41E0_7AF476D30F1A_t.jpg",
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "url": "media/panorama_B4C985AA_BF93_638F_41E0_7AF476D30F1A_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "url": "media/panorama_B4C985AA_BF93_638F_41E0_7AF476D30F1A_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_B4C985AA_BF93_638F_41E0_7AF476D30F1A_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "cardboardMenu": "this.Menu_C92F718E_C54C_1EBB_41E7_EF0DEDA9A110",
 "thumbnailUrl": "media/panorama_B4C985AA_BF93_638F_41E0_7AF476D30F1A_t.jpg",
 "hfov": 360,
 "class": "Panorama",
 "overlays": [
  "this.overlay_B0D86661_BFAE_E0BD_41D4_42E050684FEB"
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 25.37,
   "distance": 1,
   "panorama": "this.panorama_B5D67AE0_BF93_21BB_41C7_B76BB08A0CA8",
   "backwardYaw": -166.19
  }
 ],
 "vfov": 180
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "camera_C9C4A1D3_C54C_1EA9_41E0_D44A3D63F098",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 83.57,
  "pitch": 0
 },
 "id": "camera_C9DBC1F2_C54C_1E68_41E4_BB07BBC25229",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_B5A66DCB_BF91_638D_41D7_8F6AC1F2F8DD_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "label": "navepark_05E",
 "id": "panorama_B5D89010_BF91_609B_41E3_FF902C74FA24",
 "pitch": 0,
 "partial": false,
 "hfovMin": "135%",
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "url": "media/panorama_B5D89010_BF91_609B_41E3_FF902C74FA24_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "url": "media/panorama_B5D89010_BF91_609B_41E3_FF902C74FA24_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_B5D89010_BF91_609B_41E3_FF902C74FA24_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "url": "media/panorama_B5D89010_BF91_609B_41E3_FF902C74FA24_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "url": "media/panorama_B5D89010_BF91_609B_41E3_FF902C74FA24_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_B5D89010_BF91_609B_41E3_FF902C74FA24_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "url": "media/panorama_B5D89010_BF91_609B_41E3_FF902C74FA24_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "url": "media/panorama_B5D89010_BF91_609B_41E3_FF902C74FA24_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_B5D89010_BF91_609B_41E3_FF902C74FA24_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "url": "media/panorama_B5D89010_BF91_609B_41E3_FF902C74FA24_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "url": "media/panorama_B5D89010_BF91_609B_41E3_FF902C74FA24_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_B5D89010_BF91_609B_41E3_FF902C74FA24_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "url": "media/panorama_B5D89010_BF91_609B_41E3_FF902C74FA24_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "url": "media/panorama_B5D89010_BF91_609B_41E3_FF902C74FA24_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_B5D89010_BF91_609B_41E3_FF902C74FA24_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B5D89010_BF91_609B_41E3_FF902C74FA24_t.jpg",
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "url": "media/panorama_B5D89010_BF91_609B_41E3_FF902C74FA24_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "url": "media/panorama_B5D89010_BF91_609B_41E3_FF902C74FA24_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_B5D89010_BF91_609B_41E3_FF902C74FA24_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "cardboardMenu": "this.Menu_C92F718E_C54C_1EBB_41E7_EF0DEDA9A110",
 "thumbnailUrl": "media/panorama_B5D89010_BF91_609B_41E3_FF902C74FA24_t.jpg",
 "hfov": 360,
 "class": "Panorama",
 "overlays": [
  "this.overlay_AF0BA1CB_BFB3_238E_41AC_F6BFF973D777",
  "this.overlay_AD99D4A9_BFB1_618D_41E4_732C03852FD2"
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B5DD376E_BF92_E086_41E5_C7EB935F4A0A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B5D51BB5_BF91_279A_41E7_236AE5AE0FBB"
  }
 ],
 "vfov": 180
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_B5DD376E_BF92_E086_41E5_C7EB935F4A0A_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaPlayer",
 "displayPlaybackBar": true,
 "viewerArea": "this.MainViewer",
 "gyroscopeEnabled": true,
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "mouseControlMode": "drag_acceleration",
 "gyroscopeVerticalDraggingEnabled": true
},
{
 "label": "navepark_06D",
 "id": "panorama_B5A66DCB_BF91_638D_41D7_8F6AC1F2F8DD",
 "pitch": 0,
 "partial": false,
 "hfovMin": "135%",
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "url": "media/panorama_B5A66DCB_BF91_638D_41D7_8F6AC1F2F8DD_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "url": "media/panorama_B5A66DCB_BF91_638D_41D7_8F6AC1F2F8DD_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_B5A66DCB_BF91_638D_41D7_8F6AC1F2F8DD_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "url": "media/panorama_B5A66DCB_BF91_638D_41D7_8F6AC1F2F8DD_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "url": "media/panorama_B5A66DCB_BF91_638D_41D7_8F6AC1F2F8DD_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_B5A66DCB_BF91_638D_41D7_8F6AC1F2F8DD_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "url": "media/panorama_B5A66DCB_BF91_638D_41D7_8F6AC1F2F8DD_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "url": "media/panorama_B5A66DCB_BF91_638D_41D7_8F6AC1F2F8DD_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_B5A66DCB_BF91_638D_41D7_8F6AC1F2F8DD_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "url": "media/panorama_B5A66DCB_BF91_638D_41D7_8F6AC1F2F8DD_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "url": "media/panorama_B5A66DCB_BF91_638D_41D7_8F6AC1F2F8DD_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_B5A66DCB_BF91_638D_41D7_8F6AC1F2F8DD_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "url": "media/panorama_B5A66DCB_BF91_638D_41D7_8F6AC1F2F8DD_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "url": "media/panorama_B5A66DCB_BF91_638D_41D7_8F6AC1F2F8DD_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_B5A66DCB_BF91_638D_41D7_8F6AC1F2F8DD_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B5A66DCB_BF91_638D_41D7_8F6AC1F2F8DD_t.jpg",
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "url": "media/panorama_B5A66DCB_BF91_638D_41D7_8F6AC1F2F8DD_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "url": "media/panorama_B5A66DCB_BF91_638D_41D7_8F6AC1F2F8DD_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_B5A66DCB_BF91_638D_41D7_8F6AC1F2F8DD_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "cardboardMenu": "this.Menu_C92F718E_C54C_1EBB_41E7_EF0DEDA9A110",
 "thumbnailUrl": "media/panorama_B5A66DCB_BF91_638D_41D7_8F6AC1F2F8DD_t.jpg",
 "hfov": 360,
 "class": "Panorama",
 "overlays": [
  "this.overlay_ADFD3CB3_BFB7_219D_41BD_EEBCD0B5EAB5"
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B5A62561_BF91_20BA_41AE_1C8F4CC4FFE9"
  }
 ],
 "vfov": 180
},
{
 "class": "MediaAudio",
 "audio": {
  "class": "AudioResource",
  "mp3Url": "media/audio_D5326642_C03A_CEAC_41B3_C911E2823D4D.mp3",
  "oggUrl": "media/audio_D5326642_C03A_CEAC_41B3_C911E2823D4D.ogg"
 },
 "autoplay": true,
 "id": "audio_D5326642_C03A_CEAC_41B3_C911E2823D4D",
 "data": {
  "label": "Outta Time - RKVC"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -168.06,
  "pitch": -3.67
 },
 "id": "camera_C9886221_C54C_1DE8_41D9_0FDD6FE1EDBC",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "fontColor": "#FFFFFF",
 "rollOverOpacity": 0.8,
 "rollOverBackgroundColor": "#000000",
 "children": [
  {
   "class": "MenuItem",
   "label": "navepark_01",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  },
  {
   "class": "MenuItem",
   "label": "navepark_02",
   "click": "this.mainPlayList.set('selectedIndex', 1)"
  },
  {
   "class": "MenuItem",
   "label": "navepark_03D",
   "click": "this.mainPlayList.set('selectedIndex', 2)"
  },
  {
   "class": "MenuItem",
   "label": "navepark_03E",
   "click": "this.mainPlayList.set('selectedIndex', 3)"
  },
  {
   "class": "MenuItem",
   "label": "navepark_04D",
   "click": "this.mainPlayList.set('selectedIndex', 4)"
  },
  {
   "class": "MenuItem",
   "label": "navepark_04E",
   "click": "this.mainPlayList.set('selectedIndex', 5)"
  },
  {
   "class": "MenuItem",
   "label": "navepark_05E",
   "click": "this.mainPlayList.set('selectedIndex', 6)"
  },
  {
   "class": "MenuItem",
   "label": "navepark_06D",
   "click": "this.mainPlayList.set('selectedIndex', 7)"
  },
  {
   "class": "MenuItem",
   "label": "navepark_06E",
   "click": "this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "label": "Media",
 "fontFamily": "Arial",
 "class": "Menu",
 "id": "Menu_C92F718E_C54C_1EBB_41E7_EF0DEDA9A110",
 "selectedFontColor": "#FFFFFF",
 "opacity": 0.4,
 "selectedBackgroundColor": "#202020",
 "backgroundColor": "#404040",
 "rollOverFontColor": "#FFFFFF"
},
{
 "label": "navepark_02",
 "id": "panorama_B5D67AE0_BF93_21BB_41C7_B76BB08A0CA8",
 "pitch": 0,
 "partial": false,
 "hfovMin": "135%",
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "url": "media/panorama_B5D67AE0_BF93_21BB_41C7_B76BB08A0CA8_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "url": "media/panorama_B5D67AE0_BF93_21BB_41C7_B76BB08A0CA8_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_B5D67AE0_BF93_21BB_41C7_B76BB08A0CA8_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "url": "media/panorama_B5D67AE0_BF93_21BB_41C7_B76BB08A0CA8_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "url": "media/panorama_B5D67AE0_BF93_21BB_41C7_B76BB08A0CA8_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_B5D67AE0_BF93_21BB_41C7_B76BB08A0CA8_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "url": "media/panorama_B5D67AE0_BF93_21BB_41C7_B76BB08A0CA8_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "url": "media/panorama_B5D67AE0_BF93_21BB_41C7_B76BB08A0CA8_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_B5D67AE0_BF93_21BB_41C7_B76BB08A0CA8_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "url": "media/panorama_B5D67AE0_BF93_21BB_41C7_B76BB08A0CA8_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "url": "media/panorama_B5D67AE0_BF93_21BB_41C7_B76BB08A0CA8_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_B5D67AE0_BF93_21BB_41C7_B76BB08A0CA8_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "url": "media/panorama_B5D67AE0_BF93_21BB_41C7_B76BB08A0CA8_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "url": "media/panorama_B5D67AE0_BF93_21BB_41C7_B76BB08A0CA8_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_B5D67AE0_BF93_21BB_41C7_B76BB08A0CA8_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B5D67AE0_BF93_21BB_41C7_B76BB08A0CA8_t.jpg",
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "url": "media/panorama_B5D67AE0_BF93_21BB_41C7_B76BB08A0CA8_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "colCount": 4
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "url": "media/panorama_B5D67AE0_BF93_21BB_41C7_B76BB08A0CA8_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_B5D67AE0_BF93_21BB_41C7_B76BB08A0CA8_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "cardboardMenu": "this.Menu_C92F718E_C54C_1EBB_41E7_EF0DEDA9A110",
 "thumbnailUrl": "media/panorama_B5D67AE0_BF93_21BB_41C7_B76BB08A0CA8_t.jpg",
 "hfov": 360,
 "class": "Panorama",
 "overlays": [
  "this.overlay_B00FD948_BFB3_208A_41C9_A3B03830833D",
  "this.overlay_AFF1D7DA_BFB3_2F8E_41DC_DADEA62BB6D9",
  "this.overlay_B09D6A8D_BFB2_E185_41DF_A7826597D4FF"
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -166.19,
   "distance": 1,
   "panorama": "this.panorama_B4C985AA_BF93_638F_41E0_7AF476D30F1A",
   "backwardYaw": 25.37
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B5DD376E_BF92_E086_41E5_C7EB935F4A0A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B5A7F8E9_BF92_E18A_41E6_6A5542719992"
  }
 ],
 "vfov": 180
},
{
 "toolTipFontWeight": "normal",
 "playbackBarRight": 0,
 "id": "MainViewer",
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "width": "100%",
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 50,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontFamily": "Arial",
 "playbackBarHeadBorderRadius": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "progressLeft": 0,
 "minWidth": 100,
 "playbackBarBorderSize": 0,
 "playbackBarHeadBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "playbackBarHeadShadowColor": "#000000",
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 0,
 "shadow": false,
 "class": "ViewerArea",
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "borderSize": 0,
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "transitionDuration": 500,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "progressBarOpacity": 1,
 "toolTipDisplayTime": 600,
 "progressBorderSize": 0,
 "paddingRight": 0,
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "transitionMode": "blending",
 "progressBorderRadius": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarLeft": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "playbackBarHeadOpacity": 1,
 "paddingTop": 0,
 "paddingBottom": 0,
 "toolTipShadowBlurRadius": 3,
 "progressBorderColor": "#000000",
 "playbackBarBottom": 5,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": "1.11vmin",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipShadowColor": "#333333",
 "playbackBarHeight": 10,
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical"
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "pitch": -9.72,
   "yaw": 9.39,
   "image": "this.AnimatedImageResource_AA0848BD_BFDE_C3D4_41CE_014E80D99491",
   "hfov": 10.29,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_AFA803E4_BFB1_27BA_41E3_05AD97413B17",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 9.39,
   "hfov": 10.29,
   "pitch": -9.72,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_B5DD376E_BF92_E086_41E5_C7EB935F4A0A_0_HS_0_0_0_map.gif",
      "width": 36,
      "height": 16
     }
    ]
   }
  }
 ],
 "data": {
  "label": "Circle Arrow 04b"
 }
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B5D89010_BF91_609B_41E3_FF902C74FA24, this.camera_C9EB9202_C54C_1DAB_41BE_4960A33A6442); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "pitch": -4.48,
   "yaw": -167.83,
   "image": "this.AnimatedImageResource_AA0BB8BE_BFDE_C3D4_41D1_C9EC158F62E6",
   "hfov": 7.63,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_ADE0AB57_BFB2_E086_41DE_2744B6C51FF4",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -167.83,
   "hfov": 7.63,
   "pitch": -4.48,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_B5DD376E_BF92_E086_41E5_C7EB935F4A0A_0_HS_1_0_0_map.gif",
      "width": 36,
      "height": 16
     }
    ]
   }
  }
 ],
 "data": {
  "label": "Circle Arrow 04b"
 }
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B5D67AE0_BF93_21BB_41C7_B76BB08A0CA8, this.camera_C9F9B221_C54C_1DE8_41CD_CF1D3CF69FF8); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "pitch": -14.77,
   "yaw": 149.16,
   "image": "this.AnimatedImageResource_AA0BE8BF_BFDE_C3D4_41CC_8BB183710F3F",
   "hfov": 11.19,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_AE21C2B7_BFB3_2185_41D4_4ED3E89C1B8E",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 149.16,
   "hfov": 11.19,
   "pitch": -14.77,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_B5DD376E_BF92_E086_41E5_C7EB935F4A0A_0_HS_2_0_0_map.gif",
      "width": 36,
      "height": 16
     }
    ]
   }
  }
 ],
 "data": {
  "label": "Circle Arrow 04b"
 }
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 5); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "pitch": -10.16,
   "yaw": 101.28,
   "image": "this.AnimatedImageResource_AA0B58BF_BFDE_C3D4_41DA_83A37455BC03",
   "hfov": 13.38,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_AE2CC302_BFBF_207E_41B5_79B7A1526529",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 101.28,
   "hfov": 13.38,
   "pitch": -10.16,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_B5A62561_BF91_20BA_41AE_1C8F4CC4FFE9_0_HS_0_0_0_map.gif",
      "width": 36,
      "height": 16
     }
    ]
   }
  }
 ],
 "data": {
  "label": "Circle Arrow 04b"
 }
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B5D863B9_BF91_278A_41CB_31AE29583BC1, this.camera_C84D8262_C54C_626B_41D9_0E83AA62C544); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "pitch": -20.84,
   "yaw": -87.62,
   "image": "this.AnimatedImageResource_AA0AB8BF_BFDE_C3D4_41A9_1B553BDB7A1A",
   "hfov": 14.24,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_AC2FFF16_BFBF_E086_41D9_0F09ED71D08A",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -87.62,
   "hfov": 14.24,
   "pitch": -20.84,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_B5A62561_BF91_20BA_41AE_1C8F4CC4FFE9_0_HS_1_0_0_map.gif",
      "width": 36,
      "height": 16
     }
    ]
   }
  }
 ],
 "data": {
  "label": "Circle Arrow 04b"
 }
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "pitch": -17.74,
   "yaw": -2.49,
   "image": "this.AnimatedImageResource_AC421F5C_BFB3_208A_41C3_2EC933C95BF9",
   "hfov": 22.45,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_AFA6304D_BFB7_2085_41E5_C538FF468EFF",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -2.49,
   "hfov": 22.45,
   "pitch": -17.74,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_B5A7F8E9_BF92_E18A_41E6_6A5542719992_0_HS_0_0_0_map.gif",
      "width": 36,
      "height": 16
     }
    ]
   }
  }
 ],
 "data": {
  "label": "Circle Arrow 04b"
 }
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B5A62561_BF91_20BA_41AE_1C8F4CC4FFE9, this.camera_C99FA239_C54C_1DD8_41C9_FACDD1C4B8D1); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "pitch": -25.39,
   "yaw": 85.18,
   "image": "this.AnimatedImageResource_AA0AF8BF_BFDE_C3D4_41D4_3F0B3D0FC00F",
   "hfov": 16.96,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_AE69B591_BFB1_239D_41DF_CF63D49FC31C",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 85.18,
   "hfov": 16.96,
   "pitch": -25.39,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_B5D863B9_BF91_278A_41CB_31AE29583BC1_0_HS_0_0_0_map.gif",
      "width": 36,
      "height": 16
     }
    ]
   }
  }
 ],
 "data": {
  "label": "Circle Arrow 04b"
 }
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B5DD376E_BF92_E086_41E5_C7EB935F4A0A, this.camera_C9886221_C54C_1DE8_41D9_0FDD6FE1EDBC); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "pitch": -5.68,
   "yaw": 179.66,
   "image": "this.AnimatedImageResource_AB1BDCCB_BFCA_C3BD_41DC_62DA39CF0EBB",
   "hfov": 18.43,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_ACB10609_BFB3_608D_41E7_15CD875913D4",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 179.66,
   "hfov": 18.43,
   "pitch": -5.68,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_B5D863B9_BF91_278A_41CB_31AE29583BC1_0_HS_1_0_0_map.gif",
      "width": 36,
      "height": 16
     }
    ]
   }
  }
 ],
 "data": {
  "label": "Circle Arrow 04b"
 }
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B5D89010_BF91_609B_41E3_FF902C74FA24, this.camera_C9DBC1F2_C54C_1E68_41E4_BB07BBC25229); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "pitch": -7.76,
   "yaw": -148.76,
   "image": "this.AnimatedImageResource_D92822F9_C04A_475D_41E3_354D11BEA914",
   "hfov": 12.09,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_ADB6D426_BFB1_E086_41DE_E14545C06A8B",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -148.76,
   "hfov": 12.09,
   "pitch": -7.76,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_B5D51BB5_BF91_279A_41E7_236AE5AE0FBB_0_HS_0_0_0_map.gif",
      "width": 36,
      "height": 16
     }
    ]
   }
  }
 ],
 "data": {
  "label": "Circle Arrow 04b"
 }
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B5D67AE0_BF93_21BB_41C7_B76BB08A0CA8, this.camera_C9AE424B_C54C_1DB8_41D9_448A0DCC05CB); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "pitch": -12.44,
   "yaw": 25.37,
   "image": "this.AnimatedImageResource_AA0E48BA_BFDE_C3DC_41E2_182EC60423F7",
   "hfov": 13.77,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_B0D86661_BFAE_E0BD_41D4_42E050684FEB",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 25.37,
   "hfov": 13.77,
   "pitch": -12.44,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_B4C985AA_BF93_638F_41E0_7AF476D30F1A_0_HS_2_0_0_map.gif",
      "width": 36,
      "height": 16
     }
    ]
   }
  }
 ],
 "data": {
  "label": "Circle Arrow 04b"
 }
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B5D51BB5_BF91_279A_41E7_236AE5AE0FBB, this.camera_C9C4A1D3_C54C_1EA9_41E0_D44A3D63F098); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "pitch": -8.96,
   "yaw": -71.9,
   "image": "this.AnimatedImageResource_A9F588C0_BFDE_C3AC_41C3_7152403E6378",
   "hfov": 10.18,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_AF0BA1CB_BFB3_238E_41AC_F6BFF973D777",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -71.9,
   "hfov": 10.18,
   "pitch": -8.96,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_B5D89010_BF91_609B_41E3_FF902C74FA24_0_HS_0_0_0_map.gif",
      "width": 36,
      "height": 16
     }
    ]
   }
  }
 ],
 "data": {
  "label": "Circle Arrow 04b"
 }
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B5DD376E_BF92_E086_41E5_C7EB935F4A0A, this.camera_C93541BD_C54C_1ED9_41E3_D7D5F34985AA); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "pitch": -6.19,
   "yaw": 69.32,
   "image": "this.AnimatedImageResource_D92BB2F9_C04A_475D_41A6_3F526263B2A3",
   "hfov": 10.25,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_AD99D4A9_BFB1_618D_41E4_732C03852FD2",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 69.32,
   "hfov": 10.25,
   "pitch": -6.19,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_B5D89010_BF91_609B_41E3_FF902C74FA24_0_HS_1_0_0_map.gif",
      "width": 36,
      "height": 16
     }
    ]
   }
  }
 ],
 "data": {
  "label": "Circle Arrow 04b"
 }
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B5A62561_BF91_20BA_41AE_1C8F4CC4FFE9, this.camera_C9BDD258_C54C_1DA7_41DF_7C614B73F985); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "pitch": -8.96,
   "yaw": -88.38,
   "image": "this.AnimatedImageResource_AA0A78C1_BFDE_C3AC_41D2_BA0DE8DE1B9B",
   "hfov": 8.81,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_ADFD3CB3_BFB7_219D_41BD_EEBCD0B5EAB5",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -88.38,
   "hfov": 8.81,
   "pitch": -8.96,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_B5A66DCB_BF91_638D_41D7_8F6AC1F2F8DD_0_HS_0_0_0_map.gif",
      "width": 36,
      "height": 16
     }
    ]
   }
  }
 ],
 "data": {
  "label": "Circle Arrow 04b"
 }
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_B4C985AA_BF93_638F_41E0_7AF476D30F1A, this.camera_C8434276_C54C_6268_41E0_676432239A8C); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "pitch": -13.7,
   "yaw": -166.19,
   "image": "this.AnimatedImageResource_AA0938BC_BFDE_C3D4_41C3_89EA719C9157",
   "hfov": 18.48,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_B00FD948_BFB3_208A_41C9_A3B03830833D",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -166.19,
   "hfov": 18.48,
   "pitch": -13.7,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_B5D67AE0_BF93_21BB_41C7_B76BB08A0CA8_0_HS_1_0_0_map.gif",
      "width": 36,
      "height": 16
     }
    ]
   }
  }
 ],
 "data": {
  "label": "Circle Arrow 04b"
 }
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "pitch": -11.18,
   "yaw": 35.91,
   "image": "this.AnimatedImageResource_AA0898BC_BFDE_C3D4_41D5_3880501F0D2A",
   "hfov": 14.2,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_AFF1D7DA_BFB3_2F8E_41DC_DADEA62BB6D9",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 35.91,
   "hfov": 14.2,
   "pitch": -11.18,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_B5D67AE0_BF93_21BB_41C7_B76BB08A0CA8_0_HS_2_0_0_map.gif",
      "width": 36,
      "height": 16
     }
    ]
   }
  }
 ],
 "data": {
  "label": "Circle Arrow 04b"
 }
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "pitch": -13.7,
   "yaw": -51.43,
   "image": "this.AnimatedImageResource_AA08D8BD_BFDE_C3D4_41D2_351B8F3DDF07",
   "hfov": 14.19,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_B09D6A8D_BFB2_E185_41DF_A7826597D4FF",
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -51.43,
   "hfov": 14.19,
   "pitch": -13.7,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_B5D67AE0_BF93_21BB_41C7_B76BB08A0CA8_0_HS_3_0_0_map.gif",
      "width": 36,
      "height": 16
     }
    ]
   }
  }
 ],
 "data": {
  "label": "Circle Arrow 04b"
 }
},
{
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_B5DD376E_BF92_E086_41E5_C7EB935F4A0A_0_HS_0_0.png",
   "width": 1200,
   "height": 780
  }
 ],
 "frameCount": 24,
 "id": "AnimatedImageResource_AA0848BD_BFDE_C3D4_41CE_014E80D99491",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_B5DD376E_BF92_E086_41E5_C7EB935F4A0A_0_HS_1_0.png",
   "width": 1200,
   "height": 780
  }
 ],
 "frameCount": 24,
 "id": "AnimatedImageResource_AA0BB8BE_BFDE_C3D4_41D1_C9EC158F62E6",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_B5DD376E_BF92_E086_41E5_C7EB935F4A0A_0_HS_2_0.png",
   "width": 1200,
   "height": 780
  }
 ],
 "frameCount": 24,
 "id": "AnimatedImageResource_AA0BE8BF_BFDE_C3D4_41CC_8BB183710F3F",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_B5A62561_BF91_20BA_41AE_1C8F4CC4FFE9_0_HS_0_0.png",
   "width": 1200,
   "height": 780
  }
 ],
 "frameCount": 24,
 "id": "AnimatedImageResource_AA0B58BF_BFDE_C3D4_41DA_83A37455BC03",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_B5A62561_BF91_20BA_41AE_1C8F4CC4FFE9_0_HS_1_0.png",
   "width": 1200,
   "height": 780
  }
 ],
 "frameCount": 24,
 "id": "AnimatedImageResource_AA0AB8BF_BFDE_C3D4_41A9_1B553BDB7A1A",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_B5A7F8E9_BF92_E18A_41E6_6A5542719992_0_HS_0_0.png",
   "width": 1200,
   "height": 780
  }
 ],
 "frameCount": 24,
 "id": "AnimatedImageResource_AC421F5C_BFB3_208A_41C3_2EC933C95BF9",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_B5D863B9_BF91_278A_41CB_31AE29583BC1_0_HS_0_0.png",
   "width": 1200,
   "height": 780
  }
 ],
 "frameCount": 24,
 "id": "AnimatedImageResource_AA0AF8BF_BFDE_C3D4_41D4_3F0B3D0FC00F",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_B5D863B9_BF91_278A_41CB_31AE29583BC1_0_HS_1_0.png",
   "width": 1200,
   "height": 780
  }
 ],
 "frameCount": 24,
 "id": "AnimatedImageResource_AB1BDCCB_BFCA_C3BD_41DC_62DA39CF0EBB",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_B5D51BB5_BF91_279A_41E7_236AE5AE0FBB_0_HS_0_0.png",
   "width": 1200,
   "height": 780
  }
 ],
 "frameCount": 24,
 "id": "AnimatedImageResource_D92822F9_C04A_475D_41E3_354D11BEA914",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_B4C985AA_BF93_638F_41E0_7AF476D30F1A_0_HS_2_0.png",
   "width": 1200,
   "height": 780
  }
 ],
 "frameCount": 24,
 "id": "AnimatedImageResource_AA0E48BA_BFDE_C3DC_41E2_182EC60423F7",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_B5D89010_BF91_609B_41E3_FF902C74FA24_0_HS_0_0.png",
   "width": 1200,
   "height": 780
  }
 ],
 "frameCount": 24,
 "id": "AnimatedImageResource_A9F588C0_BFDE_C3AC_41C3_7152403E6378",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_B5D89010_BF91_609B_41E3_FF902C74FA24_0_HS_1_0.png",
   "width": 1200,
   "height": 780
  }
 ],
 "frameCount": 24,
 "id": "AnimatedImageResource_D92BB2F9_C04A_475D_41A6_3F526263B2A3",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_B5A66DCB_BF91_638D_41D7_8F6AC1F2F8DD_0_HS_0_0.png",
   "width": 1200,
   "height": 780
  }
 ],
 "frameCount": 24,
 "id": "AnimatedImageResource_AA0A78C1_BFDE_C3AC_41D2_BA0DE8DE1B9B",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_B5D67AE0_BF93_21BB_41C7_B76BB08A0CA8_0_HS_1_0.png",
   "width": 1200,
   "height": 780
  }
 ],
 "frameCount": 24,
 "id": "AnimatedImageResource_AA0938BC_BFDE_C3D4_41C3_89EA719C9157",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_B5D67AE0_BF93_21BB_41C7_B76BB08A0CA8_0_HS_2_0.png",
   "width": 1200,
   "height": 780
  }
 ],
 "frameCount": 24,
 "id": "AnimatedImageResource_AA0898BC_BFDE_C3D4_41D5_3880501F0D2A",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_B5D67AE0_BF93_21BB_41C7_B76BB08A0CA8_0_HS_3_0.png",
   "width": 1200,
   "height": 780
  }
 ],
 "frameCount": 24,
 "id": "AnimatedImageResource_AA08D8BD_BFDE_C3D4_41D2_351B8F3DDF07",
 "rowCount": 6,
 "colCount": 4
}],
 "mobileMipmappingEnabled": false,
 "propagateClick": false,
 "vrPolyfillScale": 0.5,
 "minWidth": 20,
 "height": "100%",
 "backgroundPreloadEnabled": true,
 "gap": 10,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "horizontalAlign": "left",
 "scripts": {
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getKey": function(key){  return window[key]; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "unregisterKey": function(key){  delete window[key]; },
  "existsKey": function(key){  return key in window; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "registerKey": function(key, value){  window[key] = value; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; }
 },
 "mouseWheelEnabled": true,
 "layout": "absolute",
 "shadow": false,
 "class": "Player",
 "data": {
  "name": "Player435"
 },
 "defaultVRPointer": "laser",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
