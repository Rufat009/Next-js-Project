"use client";

import Card from "@/components/Card";
import Invoice from "@/components/Invoice";
import { StyledTitle } from "@/components/StyledComponents";

const AppleIcon = () => (
    <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g clipPath="url(#clip0_101_283)">
            <path
                d="M22.0476 17.2021C21.2662 16.733 19.641 15.7564 19.641 13.216C19.641 11.0719 21.0759 9.98985 21.8466 9.40856L21.8627 9.39635C22.1721 9.16306 22.2458 8.72867 22.0311 8.40606C20.3091 5.82074 17.3519 5.74607 16.777 5.7568H16.7735C16.3792 5.75729 16.0029 5.80268 15.6461 5.87443C15.7779 5.76901 15.9058 5.65675 16.0287 5.53766C17.2606 4.34579 17.9376 2.58727 17.8854 0.711608C17.8741 0.315782 17.5501 0 17.1538 0C15.8213 0 14.3063 0.796045 13.1999 2.07772C12.0851 3.36916 11.5644 4.91634 11.7718 6.32199C11.7889 6.43864 11.8338 6.54504 11.8982 6.63631C11.703 6.57091 11.4965 6.49477 11.2925 6.41961C10.5174 6.13408 9.63843 5.81049 8.81554 5.81049C8.79894 5.81049 7.12583 5.82269 5.45517 6.86033C3.99388 7.76863 2.25146 9.65894 2.25146 13.5093C2.25146 15.5119 3.03384 18.3154 4.24475 20.6523C5.0813 22.2668 6.81737 24.9766 9.04688 24.9893H9.0708C10.6966 24.9893 12.0436 24.0292 12.9598 24.0292C14.5245 24.0292 15.0814 25 16.7735 25C18.2905 25 19.7605 23.8477 21.1432 21.5757C21.6508 20.7411 22.0457 19.9158 22.2873 19.3701C22.7485 18.3305 22.7485 18.1919 22.7485 18.0904C22.7485 17.6233 22.3922 17.409 22.0476 17.2021ZM14.3083 3.03434C14.9091 2.33835 15.6661 1.82197 16.3831 1.59404C16.2459 2.73076 15.7657 3.75522 15.0106 4.48538C14.4816 4.99736 13.8466 5.33023 13.2018 5.44493C13.2702 4.64058 13.6548 3.79134 14.3083 3.03434ZM19.8216 20.9295C18.7766 22.6104 17.694 23.5358 16.7735 23.5358C15.507 23.5358 14.915 22.565 12.9598 22.565C11.6405 22.565 10.3818 23.5319 9.05518 23.525C8.02047 23.5192 6.67534 22.1604 5.54497 19.9787C4.43363 17.8346 3.71568 15.2952 3.71568 13.5093C3.71568 10.9811 4.54686 9.17184 6.18483 8.13127C7.46016 7.32156 8.76478 7.27617 8.81993 7.27471C9.963 7.27764 11.5497 8.28941 12.706 8.28941C13.747 8.28941 15.1409 7.22102 16.7789 7.22102H16.8058C17.203 7.21321 19.0787 7.25762 20.3965 8.68767C19.4653 9.472 18.1768 10.8825 18.1768 13.216C18.1768 16.3855 20.1813 17.777 21.1281 18.3573C20.8924 18.9284 20.4429 19.9304 19.8216 20.9295Z"
                fill="#16DBCC"
            />
        </g>
        <defs>
            <clipPath id="clip0_101_283">
                <rect width="25" height="25" fill="white" />
            </clipPath>
        </defs>
    </svg>
);

const MichaelIcon = () => (
    <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g clipPath="url(#clip0_101_302)">
            <path
                d="M21.3389 16.1611C19.9774 14.7997 18.3569 13.7918 16.5888 13.1817C18.4825 11.8775 19.7266 9.69473 19.7266 7.22656C19.7266 3.24185 16.4847 0 12.5 0C8.51528 0 5.27344 3.24185 5.27344 7.22656C5.27344 9.69473 6.51753 11.8775 8.41123 13.1817C6.64316 13.7918 5.02266 14.7997 3.66118 16.1611C1.30024 18.5221 0 21.6611 0 25H1.95312C1.95312 19.1844 6.68442 14.4531 12.5 14.4531C18.3156 14.4531 23.0469 19.1844 23.0469 25H25C25 21.6611 23.6998 18.5221 21.3389 16.1611ZM12.5 12.5C9.59224 12.5 7.22656 10.1344 7.22656 7.22656C7.22656 4.31875 9.59224 1.95312 12.5 1.95312C15.4078 1.95312 17.7734 4.31875 17.7734 7.22656C17.7734 10.1344 15.4078 12.5 12.5 12.5Z"
                fill="#FFBB38"
            />
        </g>
        <defs>
            <clipPath id="clip0_101_302">
                <rect width="25" height="25" fill="white" />
            </clipPath>
        </defs>
    </svg>
);

const PlayStationIcon = () => (
    <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M20.2994 13.265C19.8337 13.265 19.3736 13.3332 18.9314 13.4675L13.2315 15.0454V6.98364C13.2315 6.57978 13.5601 6.25122 13.9639 6.25122C14.3678 6.25122 14.6963 6.57978 14.6963 6.98364V12.6813H15.4288C18.2558 12.6813 20.5557 10.3813 20.5557 7.55435C20.5557 5.2667 19.0191 3.23696 16.8161 2.61753L7.35586 0V12.556L3.55991 13.6067C3.11167 13.7189 2.68198 13.8971 2.28261 14.1366C0.0601037 15.4691 -0.66392 18.3615 0.668697 20.584C1.19648 21.4642 1.97671 22.1334 2.92505 22.5193C3.49038 22.7494 4.09931 22.8661 4.70742 22.866C5.08501 22.866 5.46235 22.821 5.82856 22.7303L7.35586 22.3077V23.5762L12.4991 25L21.6583 22.4646L21.6775 22.459C22.6192 22.1705 23.465 21.576 24.0592 20.7849C24.6741 19.9663 24.9991 18.9911 24.9991 17.9648C24.9991 15.3733 22.8908 13.265 20.2994 13.265ZM7.35581 16.6719L3.50405 17.7381L3.89487 19.1499L7.35581 18.1918V20.7878L5.46694 21.3107C5.20747 21.3742 4.94672 21.405 4.68935 21.405C3.57319 21.4049 2.52182 20.8262 1.925 19.8307C1.00776 18.3009 1.5061 16.3101 3.03588 15.3928C3.31342 15.2264 3.61167 15.103 3.92231 15.026L7.35581 14.0758V16.6719ZM11.7666 6.98364V23.2773L8.8207 22.4618V1.9252L16.4226 4.02856C17.9936 4.47031 19.0909 5.92022 19.0909 7.55439C19.0909 9.3229 17.8306 10.8026 16.1612 11.1429V6.98364C16.1612 5.77207 15.1755 4.78638 13.9639 4.78638C12.7523 4.78638 11.7666 5.77207 11.7666 6.98364ZM21.2573 21.0556L13.2315 23.2773V20.6813L21.4946 18.3938L21.1038 16.9821L13.2315 19.1613V16.5653L19.3314 14.8767L19.3505 14.8711C19.6565 14.7774 19.9758 14.7299 20.2994 14.7299C22.0831 14.7299 23.5343 16.1811 23.5343 17.9647C23.5342 19.3931 22.6195 20.6341 21.2573 21.0556Z"
            fill="#396AFF"
        />
    </svg>
);

const WilliamIcon = () => (
    <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M21.3389 16.1611C19.9774 14.7997 18.3569 13.7918 16.5888 13.1817C18.4825 11.8775 19.7266 9.69473 19.7266 7.22656C19.7266 3.24185 16.4847 0 12.5 0C8.51528 0 5.27344 3.24185 5.27344 7.22656C5.27344 9.69473 6.51753 11.8775 8.41123 13.1817C6.64316 13.7918 5.02266 14.7997 3.66118 16.1611C1.30024 18.5221 0 21.6611 0 25H1.95312C1.95312 19.1844 6.68442 14.4531 12.5 14.4531C18.3156 14.4531 23.0469 19.1844 23.0469 25H25C25 21.6611 23.6998 18.5221 21.3389 16.1611ZM12.5 12.5C9.59224 12.5 7.22656 10.1344 7.22656 7.22656C7.22656 4.31875 9.59224 1.95312 12.5 1.95312C15.4078 1.95312 17.7734 4.31875 17.7734 7.22656C17.7734 10.1344 15.4078 12.5 12.5 12.5Z"
            fill="#FF82AC"
        />
    </svg>
);

export default function InvoicesSent() {
    return (
        <div>
            <StyledTitle>Invoices Sent</StyledTitle>
            <Card width={"350px"} height={"364px"} padding={"30px 25px 31px 25px"}>
                <ul className="flex flex-col gap-[21px] ml-[-10px]">
                    <li>
                        <Invoice
                            title="Apple Store"
                            amount={450}
                            date="5h ago"
                            icon={<AppleIcon />}
                            color="#DCFAF8"
                        />
                    </li>
                    <li>
                        <Invoice
                            title="Michael"
                            amount={160}
                            date="2 days ago"
                            icon={<MichaelIcon />}
                            color="#FFF5D9"
                        />
                    </li>
                    <li>
                        <Invoice
                            title="Playstation"
                            amount={1085}
                            date="5 days ago"
                            icon={<PlayStationIcon />}
                            color="#E7EDFF"
                        />
                    </li>
                    <li>
                        <Invoice
                            title="William"
                            amount={90}
                            date="10 days ago"
                            icon={<WilliamIcon />}
                            color="#FFE0EB"
                        />
                    </li>
                </ul>
            </Card>
        </div>
    );
}