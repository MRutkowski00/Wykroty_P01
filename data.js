var APP_DATA = {
  "scenes": [
    {
      "id": "0-01_lobby",
      "name": "01_Lobby",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.982253716742271,
          "pitch": 0.012102278867647698,
          "rotation": 0,
          "target": "1-02_sala_konferencyjna"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-02_sala_konferencyjna",
      "name": "02_Sala_konferencyjna",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.227950280992145,
          "pitch": -0.06301403925357363,
          "rotation": 0,
          "target": "0-01_lobby"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Wykroty_P01",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
