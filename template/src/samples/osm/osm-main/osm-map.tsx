import React, { useEffect } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const customIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  shadowSize: [41, 41],
});

const MapComponent: React.FC = () => {
  useEffect(() => {
    // Leaflet 초기화
    const map = L.map("map").setView([37.5665, 126.978], 7); // 서울의 좌표와 적절한 줌 레벨

    // 오픈스트리트맵 타일 레이어 추가
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap 기여자</a>',
    }).addTo(map);

    // 축척 막대 추가
    L.control.scale({ imperial: true, metric: true }).addTo(map);

    // 사용자 정의 아이콘을 사용하는 마커 추가
    L.marker([37.5665, 126.978], { icon: customIcon })
      .bindPopup("서울")
      .addTo(map);

    // 컴포넌트 언마운트 시 Leaflet 인스턴스를 정리
    return () => {
      map.remove();
    };
  }, []);

  return <div id="map" className="w-full h-96 lg:h-full z-0" />;
};

export default MapComponent;
