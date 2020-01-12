import React, { Component } from "react";
import { Button, notification, Icon } from "antd";

const openNotification = () => {
  notification.open({
    message: 'Notification Title',
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    icon: <Icon type="smile" style={{ color: '#108ee9' }} />,
  });
};

class Home extends Component {
    render() {
        return (
            <div style={{ paddingLeft: 50, paddingRight: 50 }}>
                <h2>Dati Personali</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis rhoncus purus metus, a dapibus dolor malesuada et. Duis
                    eleifend tempor feugiat. Etiam eu nisi lorem. Sed id erat
                    venenatis, maximus nulla eget, consectetur felis. Donec id
                    urna lorem. Pellentesque habitant morbi tristique senectus
                    et netus et malesuada fames ac turpis egestas. Nam sed diam
                    ac arcu blandit semper. Sed rhoncus tellus neque, a
                    tincidunt nisi facilisis ac. Nullam sollicitudin orci non
                    magna imperdiet, id porta ligula fermentum. In vestibulum
                    pulvinar purus non vulputate. Sed rutrum est sit amet est
                    faucibus porttitor. Nunc eu ullamcorper lorem, non congue
                    justo. Morbi volutpat felis in enim imperdiet, a tincidunt
                    sem dapibus. Nam id iaculis tortor.
                </p>

                <Button type="primary" onClick={openNotification}>
                    Open the notification box
                </Button>

                <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
            </div>
        );
    }
}

export default Home;
