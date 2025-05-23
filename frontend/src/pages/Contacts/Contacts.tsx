import React, {FC, ReactElement, useEffect} from "react";
import { Col, Row, Typography } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";

import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import ContentTitle from "../../components/ContentTitle/ContentTitle";

const Contacts: FC = (): ReactElement => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <ContentWrapper>
            <ContentTitle icon={<InfoCircleOutlined />} title={"Contacts"} />
            <Row gutter={32}>
                <Col span={12}>
                    <div>
                        <Typography.Text strong>{"Mobile: "}</Typography.Text>
                        <Typography.Text>(+91) 0123456789</Typography.Text>
                    </div>
                    <div>
                        <Typography.Text strong>{"E-mail: "}</Typography.Text>
                        <Typography.Text>admin@gmail.com</Typography.Text>
                    </div>
                    <div style={{ marginTop: 16 }}>
                        <Typography.Text strong>Working time</Typography.Text>
                    </div>
                    <div>
                        <Typography.Text>
                            The online store is open from 08:00 am to 8:00 pm without breaks and weekends. <br />
                            Online orders are accepted around the clock.
                        </Typography.Text>
                    </div>
                    <div style={{ marginTop: 16 }}>
                        <Typography.Text strong>Delivery</Typography.Text>
                    </div>
                    <div>
                        <Typography.Text>Delivery of orders come through courier service.</Typography.Text>
                    </div>
                </Col>
            </Row>
        </ContentWrapper>
    );
};

export default Contacts;
