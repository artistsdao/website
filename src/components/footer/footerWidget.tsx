import React from "react";
import "./footerWidget.less";
function FooterWidget() {
  return (
    <div className="footerWidget">
      <p>©{new Date().getFullYear()}ArtistDAO is an NFT collectible, decentralized design(Dede) and a strategy game in Ethereum</p>
    </div>
  );
}
export default FooterWidget;
