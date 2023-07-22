import React, { useState } from 'react';
import Play from './play';
import List from './list';

const listMusic = [
  {
    id: 1,
    name: 'Là-Vũ',
    cover: require('../assets/music/1.jpg'),
    src: require('../assets/music/la.mp3'),
    artist: 'Vũ',
    isLiked: true,
  },
  {
    id: 2,
    name: 'Chuyện Đôi Ta',
    cover: require('../assets/music/2.jpg'),
    src: require('../assets/music/chuyendoita.mp3'),
    artist: 'NF Real 2',
    isLiked: false,
  },
  {
    id: 3,
    name: 'Bao Tiền Một Mớ Bình Yên',
    cover: require('../assets/music/3.jpg'),
    src: require('../assets/music/baotienmotmobinhyen.mp3'),
    artist: 'NF Real 3',
    isLiked: false,
  },
  {
    id: 4,
    name: 'Lời Tạm Biệt Chưa Nói',
    cover: require('../assets/music/4.jpg'),
    src: require('../assets/music/loitambietchuanoi.mp3'),
    artist: 'NF Real 4',
    isLiked: false,
  },
  {
    id: 5,
    name: 'Thằng Điên',
    cover: require('../assets/music/5.jpg'),
    src: require('../assets/music/thangdien.mp3'),
    artist: 'NF Real 5',
    isLiked: true,
  },

]

function PlayList(props) {
  const [selectedMusic, setSelectedMusic] = useState(listMusic[0]);
  
  const onSelectMusic = (selectedId) => { // nhận selectedId
    const selected = listMusic.find((item) => item.id === selectedId)
    setSelectedMusic(selected);
  }

  const onNextMusic = () => {
    const currentIndexMusic = listMusic.findIndex((item) => item.id === selectedMusic.id);
    if (currentIndexMusic === listMusic.length - 1) {
      setSelectedMusic(listMusic[0])
    } else {
      setSelectedMusic(listMusic[currentIndexMusic + 1])
    }
  }

  const onPrevMusic = () => {
    const currentIndexMusic = listMusic.findIndex((item) => item.id === selectedMusic.id);
    if (currentIndexMusic === 0) {
      setSelectedMusic(listMusic[listMusic.length - 1])
    } else {
      setSelectedMusic(listMusic[currentIndexMusic - 1])
    }
  }

  return (
    <div className="d-flex">
      <List listMusic={listMusic} onSelectMusic={onSelectMusic} selectedId={selectedMusic.id} />

      {/* <Play music={selectedMusic} /> */}
      <Play
        name={selectedMusic.name}
        artist={selectedMusic.artist}
        cover={selectedMusic.cover}
        id={selectedMusic.id}
        src={selectedMusic.src}
        onNextMusic={onNextMusic}
        onPrevMusic={onPrevMusic}
      />

    </div>
  );
}

export default PlayList;