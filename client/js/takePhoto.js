  Template.takePhoto.helpers({
    photo: function () {
      return Session.get("photo");
    }
  });

  Template.takePhoto.events({
    'click button#shoot': function () {
      var cameraOptions = {
        width: 800,
        height: 600
      };
      alert('hola');

      MeteorCamera.getPicture(cameraOptions, function (error, data) {
        Session.set("photo", data);
      });
    }
  });
