 define("MainHeaderSchema", [], function() {
  return {
    methods: {
      init: function() {
        this.callParent(arguments);
        this.showMaintenanceBanner();
      },

      showMaintenanceBanner: function() {
        const sysSettingsCode = "UsrMaintenanceBannerText";

        // Charger la valeur du paramètre système
        Terrasoft.SysSettings.querySysSettingsItem(sysSettingsCode, function(value) {
          if (!value) {
            return; // Ne rien afficher si vide
          }

          if (document.getElementById("maintenance-banner")) {
            return; // Éviter les doublons
          }

          const banner = document.createElement("div");
          banner.id = "maintenance-banner";
          banner.style.backgroundColor = "#ff4d4f";
          banner.style.color = "#fff";
          banner.style.padding = "12px";
          banner.style.textAlign = "center";
          banner.style.position = "fixed";
          banner.style.top = "0";
          banner.style.left = "0";
          banner.style.width = "100%";
          banner.style.zIndex = "9999";
          banner.style.fontWeight = "bold";
          banner.style.fontSize = "18px";
          banner.innerText = value;

          document.body.appendChild(banner);

          // Décaler le contenu de la page vers le bas
          const body = document.getElementsByTagName("body")[0];
          body.style.marginTop = "50px";
        }, this);
      }
    }
  };
});