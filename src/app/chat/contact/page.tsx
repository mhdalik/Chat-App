import "../../../styles/contact-view.scss";
import {appConfig} from "@/config/app";

export default function Contacts() {
    const data = [
        {
            name: "Deepanshu Soni",
            memberId: 3241,
            isActive: true,
        },
        {
            name: "John Doe",
            memberId: 3242,
            isActive: false,
        },
        {
            name: "Aamir Zaidi",
            memberId: 3243,
            isActive: true,
        },
        {
            name: "John Doe",
            memberId: 3242,
            isActive: false,
        },
        {
            name: "Deepanshu Soni",
            memberId: 3241,
            isActive: true,
        },
        {
            name: "John Doe",
            memberId: 3242,
            isActive: false,
        },
        {
            name: "Aamir Zaidi",
            memberId: 3243,
            isActive: true,
        },
        {
            name: "John Doe",
            memberId: 3242,
            isActive: false,
        },
        {
            name: "Deepanshu Soni",
            memberId: 3241,
            isActive: true,
        },
        {
            name: "John Doe",
            memberId: 3242,
            isActive: false,
        },
        {
            name: "Aamir Zaidi",
            memberId: 3243,
            isActive: true,
        },
        {
            name: "John Doe",
            memberId: 3242,
            isActive: false,
        },
        {
            name: "Deepanshu Soni",
            memberId: 3241,
            isActive: true,
        },
        {
            name: "John Doe",
            memberId: 3242,
            isActive: false,
        },
        {
            name: "Aamir Zaidi",
            memberId: 3243,
            isActive: true,
        },
        {
            name: "John Doe",
            memberId: 3242,
            isActive: false,
        },
    ];
    return (
        <div className="app__contact">
            <header className="app__contact__header">
                <h3>Anonymous Contacts</h3>
                <p>Saved {appConfig?.appName} members will be shown here</p>
            </header>
            {
                data.length > 0 ?
                    <div className="app__contact__content">
                        {
                            data.map((item, key) => {
                                return (
                                    <div key={key} className="app__contact__card">
                                        <div className="app__contact__card__name">
                                            <h4>{item?.name}</h4>
                                        </div>
                                        <small><b>Member ID</b>: {item?.memberId}</small>
                                        <small><b>Status</b>: {item?.isActive ? "Active" : "In-Active"}</small>
                                    </div>
                                );
                            })
                        }
                    </div>
                    :
                    <div className="app__contact__empty">
                        <h2>No Contacts Available</h2>
                        <p>Click here to add your first contact</p>
                    </div>
            }
        </div>
    )
}
