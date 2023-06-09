// import Drarwer from "@/components/common/Drawer";
import { Button, Drawer, Form, Input, Radio, Space, message } from "antd";
import { CompoundedComponent } from "antd/es/float-button/interface";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { IUser } from "../../../interface/user-interface";
import chatImg from "../../../public/images/profile/purpose/chat-room.png";
import cupImg from "../../../public/images/profile/purpose/cup.png";
import kissImg from "../../../public/images/profile/purpose/kiss.png";
import { AppDispatch } from "../../../redux/configStore";
import { updateDetailUser } from "../../../redux/reducers/userReducer";
import FormDetails from "../userDetails/formDetails/index";
import DrawerTitle from "./common-details/drawer-title";
import HeaderDetail from "./common-details/header-detail";
import RadioGroup from "./common-details/radio-group";
import HobbySection from "./hobbies";
import detailsStyle from "./userDetails.module.scss";

const { TextArea } = Input;
interface ProfileDetailsProps {
    profile: IUser;
}

const UserDetails: React.FC<ProfileDetailsProps> = ({ profile }) => {
    const [isPurposeOpen, setIsPurposeOpen] = useState<boolean>(false);
    const [isIntroOpen, setIsIntroOpen] = useState<boolean>(false);
    const [form] = Form.useForm<CompoundedComponent>();
    const [subTitle, setSubTitle] = useState<string>(profile.reason);
    const [bio, setBio] = useState<string>("");
    const [messageApi, contextHolder] = message.useMessage();
    const dispatch: AppDispatch = useDispatch();

    const showIntroDrawer = () => {
        setIsIntroOpen(true);
    };

    const showPurposeDrawer = () => {
        setIsPurposeOpen(true);
    };

    const closePurposeDrawer = () => {
        setIsPurposeOpen(false);
    };

    const closeIntroDrawer = () => {
        setIsIntroOpen(false);
    };

    const updateDetailsHandler = (value: any) => {
        const uploadDetailUser = async () => {
            const data = await dispatch(updateDetailUser(value));
            if (data) {
                messageApi.open({
                    type: "success",
                    content: "Cập nhật hồ sơ thành công",
                });
            } else {
                messageApi.open({
                    type: "error",
                    content: "Cập nhật hồ sơ thất bại",
                });
            }
        };
        uploadDetailUser();
    };

    useEffect(() => {
        switch (profile.reason) {
            case "dating":
                setSubTitle("Muốn hẹn hò");
                break;
            case "friends":
                setSubTitle("Muốn tâm sự");
                break;
            case "newRelationship":
                setSubTitle("Đang tìm một mối quan hệ mới");
                break;
            default:
                break;
        }
        if (profile?.bio) setBio(profile.bio);
    }, []);

    return (
        <Form form={form} onFinish={updateDetailsHandler} className={detailsStyle["user__details"]}>
            {contextHolder}
            <HeaderDetail showPurposeDrawer={showPurposeDrawer} title={"Tại sao bạn lại ở đây"} subTitle={subTitle} />
            <Drawer
                placement="bottom"
                height={`75%`}
                closable={false}
                mask={true}
                maskClosable={true}
                open={isPurposeOpen}
                onClose={closePurposeDrawer}
                bodyStyle={{ background: "transparent" }}
                className={detailsStyle["drawer--body"]}
                drawerStyle={{ borderRadius: "2rem 2rem 0 0" }}
            >
                <DrawerTitle drawerTitle="Cho mọi người biết lý do bạn ở đây?" />

                <Form.Item className={detailsStyle["choosing"]} name="reason">
                    <Radio.Group name="radiogroup" defaultValue={profile.reason}>
                        <RadioGroup
                            radioTitle="Muốn hẹn hò"
                            radioSubTitle="Tôi muốn hẹn hò, tìm mấy em ghệ"
                            image={cupImg}
                            value="dating"
                            setSubtitle={setSubTitle}
                        />

                        <RadioGroup
                            radioTitle="Muốn tâm sự"
                            radioSubTitle="Tôi muốn hẹn hò, tìm mấy em ghệ"
                            image={chatImg}
                            value="friends"
                            setSubtitle={setSubTitle}
                        />

                        <RadioGroup
                            radioTitle="Đang tìm mộ mối quan hệ mới"
                            radioSubTitle="Tôi muốn hẹn hò, tìm mấy em ghệ"
                            image={kissImg}
                            value="newRelationship"
                            setSubtitle={setSubTitle}
                        />
                    </Radio.Group>
                </Form.Item>
            </Drawer>
            <HeaderDetail showPurposeDrawer={showIntroDrawer} title={"Giới thiệu bản thân"} subTitle={bio} />
            <Drawer
                placement="bottom"
                height={`75%`}
                closable={false}
                mask={true}
                maskClosable={true}
                onClose={closeIntroDrawer}
                open={isIntroOpen}
                bodyStyle={{ background: "transparent" }}
                className={detailsStyle["drawer--body"]}
                drawerStyle={{ borderRadius: "2rem 2rem 0 0" }}
            >
                <DrawerTitle drawerTitle="Hãy viết gì đó để giới thiệu bản thân?" />

                <Space direction="vertical" style={{ width: "100%", margin: "1rem 0" }} wrap>
                    <Form.Item name="bio">
                        <TextArea
                            defaultValue={bio}
                            showCount
                            maxLength={100}
                            style={{ height: 120, resize: "none" }}
                            onChange={(e) => setBio(e.target.value)}
                        />
                    </Form.Item>
                </Space>
            </Drawer>
            <FormDetails profile={profile} />
            <HobbySection form={form} hobbiesProp={profile.hobbies} />
            <Form.Item>
                <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
                    Lưu
                </Button>
            </Form.Item>
        </Form>
    );
};

export default UserDetails;
