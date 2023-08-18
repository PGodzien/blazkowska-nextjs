import Image from "next/image";
import slider from "../../public/oferta_rzeszow.jpg"
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Damian Błakowski - Barber Room Przemyśl',
    description: 'Oferujemy najwyższej jakości profesjonalne usługi barberskie w Przemyślu – strzyenie męski, trymowanie brody, barber full combo, konturowanie, covering up gray, golenie i konturowanie brzytwą.',
}

const Offer = () => {
    return (
        <>
            <div className="flex justify-end lg:justify-around 2xl:container 2xl:mx-auto lg:mb-44">
                <div className="flex-col justify-center hidden ml-8 lg:flex">
                    <h1 className="font-serif text-6xl font-bold xl:mr-0">Oferta Rzeszów</h1>
                </div>
                <div className="relative flex mt-8 ml-16 md:ml-24 lg:mt-0">
                    <Image className="z-10 border-b-8 border-l-8 border-white" src={slider} alt="Kontakt Slider" />
                    <div className="absolute w-full h-full mt-8 -ml-8 border-4 lg:w-full lg:h-full xl:mt-20 xl:-ml-20 border-blueGreen"
                    ></div>
                </div>
            </div>

            <div className="container justify-center w-4/5 mx-auto lg:space-x-24 lg:flex text-primary">
                <div className="flex flex-col justify-start mt-12 md:w-1/2 lg:mt-0">
                    <div className="z-10 px-12 mx-auto -mb-1 bg-white">
                        <svg
                            width="120px"
                            height="112px"
                            viewBox="0 0 120 112"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g
                                id="⚙️-Symbols"
                                stroke="none"
                                strokeWidth="1"
                                fill="none"
                                fill-rule="evenodd"
                            >
                                <g
                                    id="Group"
                                    transform="translate(-0.000000, 0.000000)"
                                    fill="#0E7490"
                                    fill-rule="nonzero"
                                >
                                    <path
                                        d="M1.44490013,50.2415 L2.19318013,49.2848 C6.29440013,44.0367 7.82696013,42.0678 6.13611013,36.2582 C9.21562013,35.4263 9.21562013,35.4263 9.21562013,35.4263 C11.3381701,42.7056 8.99256013,45.7006 4.73306013,51.1497 C3.99916013,52.0856 3.99916013,52.0856 3.99916013,52.0856 C3.25087013,53.0562 3.18611013,53.5484 3.21490013,53.6663 C3.37319013,54.0961 5.17916013,54.623 6.04258013,54.8657 C7.71904013,55.344 9.31635013,55.8016 9.98549013,57.0633 C10.2085701,57.4932 10.4171701,58.1864 10.1149701,59.0808 C9.55379013,60.6476 9.81282013,61.7707 10.0502701,62.2005 C11.1510701,62.0341 12.5757701,61.8331 12.5757701,61.8331 C13.0577701,64.8765 13.0577701,64.8765 13.0577701,64.8765 C13.0577701,64.8765 12.0504701,65.0152 11.0935701,65.1677 C10.9640701,65.5975 10.8704701,66.0274 10.8704701,66.3185 C12.2591701,66.8593 14.1730701,67.7328 14.4176701,70.6376 C14.4464701,71.0536 14.4320701,71.6706 14.4032701,72.3916 C14.3385701,74.2704 14.2090701,77.4248 15.5041701,78.5479 C15.6768701,78.7004 16.2236701,79.1649 17.7418701,78.9777 C23.4906701,78.2082 28.6927701,75.7956 32.8443701,72.0103 C32.8443701,33.5683 32.8443701,33.5683 32.8443701,33.5683 L4.25099013,33.5683 L4.25099013,33.5059 L3.67539013,33.5544 C3.62502013,32.9721 2.65367013,19.2661 12.0864701,9.43545 C18.1087701,3.18212 26.9515701,0 38.3701701,0 C59.2648701,0 75.0221701,13.5951 75.0221701,31.641 C75.0221701,44.314 75.0221701,44.314 75.0221701,44.314 C76.4251701,43.9605 77.8354701,43.7941 79.2024701,43.7941 C88.6568701,43.7941 96.3340701,51.2121 96.3340701,60.3009 C96.3340701,66.6721 92.5853701,72.1906 87.0883701,74.9429 C87.3617701,74.9429 87.3617701,74.9429 87.3617701,74.9429 L87.3617701,76.0521 L89.5346701,76.0521 C93.5567701,76.0521 97.2118701,79.2204 99.5574701,81.8825 C101.14087,83.6642 101.83787,83.6504 102.91087,83.6365 C103.21287,83.6365 103.21287,83.6365 103.21287,83.6365 L103.21287,82.5619 C103.21287,81.7161 103.93187,81.0229 104.80987,81.0229 C117.40887,81.0229 117.40887,81.0229 117.40887,81.0229 C118.30087,81.0229 119.00587,81.7161 119.00587,82.5619 C119.00587,108.497 119.00587,108.497 119.00587,108.497 C119.00587,109.343 118.30087,110.036 117.40887,110.036 C104.80987,110.036 104.80987,110.036 104.80987,110.036 C103.93187,110.036 103.21287,109.343 103.21287,108.497 C103.21287,106.452 103.21287,106.452 103.21287,106.452 L102.12587,106.452 C101.69487,106.48 100.44987,107.312 99.6006701,107.866 C97.4924701,109.267 94.8734701,111.007 91.9378701,111.007 C74.3889701,111.007 74.3889701,111.007 74.3889701,111.007 C70.2661701,111.007 66.8844701,107.825 66.7405701,103.873 C66.7405701,103.762 66.7405701,103.762 66.7405701,103.762 L66.7117701,102.008 L66.5390701,91.1308 C66.5102701,89.1272 67.2873701,87.2554 68.7263701,85.8411 C69.7984701,84.7943 71.1367701,84.101 72.5901701,83.8098 C72.5901701,75.7055 72.5901701,75.7055 72.5901701,75.7055 L42.2555701,68.2458 C41.5360701,68.0795 41.0611701,67.4624 41.0611701,66.7553 C41.0611701,53.8673 41.0611701,53.8673 41.0611701,53.8673 C41.0611701,53.1741 41.5432701,52.5571 42.2555701,52.3768 C71.8274701,45.1044 71.8274701,45.1044 71.8274701,45.1044 L71.8274701,31.641 C71.8274701,15.3491 57.4444701,3.07813 38.3630701,3.07813 C27.8941701,3.07813 19.8427701,5.92749 14.4320701,11.5222 C8.36660013,17.831 7.08586013,26.1988 6.86282013,30.504 C36.0174701,30.504 36.0174701,30.504 36.0174701,30.504 L36.0174701,102.001 L32.8227701,102.001 L32.8227701,76.0521 C28.5920701,79.2342 23.5914701,81.3002 18.1663701,82.035 C17.7705701,82.0836 17.3820701,82.1113 17.0151701,82.1113 C15.5473701,82.1113 14.3169701,81.6815 13.3455701,80.8495 C10.9496701,78.7559 11.0935701,74.8666 11.1870701,72.2946 C11.2158701,71.7122 11.2374701,71.2338 11.2158701,70.8941 C11.1007701,69.7225 10.6905701,69.57 9.42427013,69.0916 C9.26598013,69.0154 9.26598013,69.0154 9.26598013,69.0154 C8.66159013,68.7866 8.17952013,68.336 7.90611013,67.7259 C7.48879013,66.79 7.66867013,65.5559 7.92050013,64.5854 C7.84135013,64.5091 7.76221013,64.4328 7.69745013,64.3566 C6.51745013,63.0186 6.22964013,60.71 6.94915013,58.4221 C6.51744013,58.2211 5.70441013,57.9923 5.11441013,57.8259 C3.21490013,57.2713 0.854900131,56.5919 0.164165131,54.623 C-0.267544869,53.3335 0.149776131,51.8984 1.44490013,50.2415 Z M106.40687,106.951 L115.81087,106.951 L115.81087,84.0941 L106.40687,84.0941 L106.40687,106.951 Z M71.0144701,87.9833 C70.1654701,88.8153 69.7193701,89.9037 69.7409701,91.0615 C69.9495701,103.707 69.9495701,103.707 69.9495701,103.707 C69.9999701,106.029 71.9929701,107.922 74.4033701,107.922 C91.9522701,107.922 91.9522701,107.922 91.9522701,107.922 C93.9020701,107.922 95.9742701,106.535 97.8090701,105.322 C99.4711701,104.227 100.78087,103.367 102.11887,103.367 C103.21987,103.367 103.21987,103.367 103.21987,103.367 L103.21987,86.7077 L102.69487,86.7077 C101.00387,86.7077 99.3703701,86.4027 97.1398701,83.8584 C94.4273701,80.7941 91.7291701,79.1233 89.5418701,79.1233 C87.3689701,79.1233 87.3689701,79.1233 87.3689701,79.1233 L87.3689701,85.1686 C87.3689701,85.5846 87.2106701,85.9659 86.9084701,86.264 C86.6062701,86.5552 86.2033701,86.7077 85.7716701,86.7077 C74.1946701,86.7077 74.1946701,86.7077 74.1946701,86.7077 C72.9787701,86.7077 71.8634701,87.1583 71.0144701,87.9833 Z M84.1742701,83.6365 L84.1742701,76.1006 C82.6129701,76.5651 80.9364701,76.8216 79.2096701,76.8216 C78.0800701,76.8216 76.9288701,76.6691 75.7919701,76.4403 C75.7919701,83.6365 75.7919701,83.6365 75.7919701,83.6365 L84.1742701,83.6365 Z M44.2630701,55.0528 L44.2630701,65.5559 L75.6768701,73.279 C84.8218701,75.5876 93.1394701,68.8213 93.1394701,60.294 C93.1394701,52.8968 86.9012701,46.8653 79.2024701,46.8653 C78.0512701,46.8653 76.8712701,47.0178 75.6768701,47.309 C44.2630701,55.0528 44.2630701,55.0528 44.2630701,55.0528 Z M109.52287,85.1686 L112.71687,85.1686 L112.71687,88.1982 L109.52287,88.1982 L109.52287,85.1686 Z M88.3546701,60.3009 C88.3546701,65.1469 84.2678701,69.0847 79.2528701,69.0847 C74.2234701,69.0847 70.1366701,65.1469 70.1366701,60.3009 C70.1366701,55.4688 74.2234701,51.531 79.2528701,51.531 C84.2678701,51.531 88.3546701,55.4688 88.3546701,60.3009 Z M73.3312701,60.3009 C73.3312701,63.4415 76.0006701,66.0066 79.2528701,66.0066 C82.5122701,66.0066 85.1600701,63.4345 85.1600701,60.3009 C85.1600701,57.1604 82.5122701,54.6091 79.2528701,54.6091 C76.0006701,54.6091 73.3312701,57.1604 73.3312701,60.3009 Z"
                                        id="Shape"
                                    ></path>
                                </g>
                            </g>
                        </svg>
                    </div>
                    <div
                        className="p-16 space-y-4 leading-6 text-center border-4 border-blueGreen"
                    >
                        <h3 className="text-3xl">strzyżenie damskie</h3>
                        <p className="text-2xl font-extrabold text-gold">120-170</p>
                        <p className="w-1/2 mx-auto border-b-4 border-blueGreen"></p>
                        <h3 className="text-3xl">modelowanie</h3>
                        <p className="text-2xl font-extrabold text-gold">60-100</p>
                        <p className="">* Cena zawiera
                            <br />
                            profesjonalny dobór fryzury,<br />
                            mycie włosów oraz stylizację</p>
                    </div>
                </div>
                <div className="flex flex-col justify-start mt-12 md:w-1/2 lg:mt-0">
                    <div className="z-10 px-12 mx-auto -mb-1 bg-white">
                        <svg
                            width="158px"
                            height="113px"
                            viewBox="0 0 158 113"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g
                                id="⚙️-Symbols"
                                stroke="none"
                                strokeWidth="1"
                                fill="none"
                                fill-rule="evenodd"
                            >
                                <g id="Group" fill="#0E7490" fill-rule="nonzero">
                                    <path
                                        d="M66.7903,47.5249 C66.4669,47.5249 66.1661,47.605 65.8803,47.7727 C41.8671,62.6838 41.8671,62.6838 41.8671,62.6838 L0,62.6838 L0,65.9561 L40.9421,65.9561 C40.9571,65.9561 40.9571,65.9707 40.9797,65.9853 C65.8879,81.4358 65.8879,81.4358 65.8879,81.4358 C66.1736,81.618 66.4745,81.6982 66.7978,81.6982 C79.2895,81.6982 79.2895,81.6982 79.2895,81.6982 L79.2895,78.4259 L68.4825,78.4259 L68.4825,75.518 L79.282,75.518 L79.282,72.2457 L68.4825,72.2457 L68.4825,69.3378 L79.282,69.3378 L79.282,66.0655 L68.4825,66.0655 L68.4825,63.1576 L79.282,63.1576 L79.282,59.8853 L68.4825,59.8853 L68.4825,56.9774 L79.282,56.9774 L79.282,53.7051 L68.4825,53.7051 L68.4825,50.7753 L79.282,50.7753 L79.282,47.503 L66.7903,47.503 L66.7903,47.5249 Z M65.1057,77.0703 L45.0257,64.6079 L65.1057,52.1309 L65.1057,77.0703 Z M71.5358,92.6884 L69.054,92.6884 L69.054,88.3521 C69.054,87.4557 68.2944,86.7196 67.3694,86.7196 C37.6857,86.7196 37.6857,86.7196 37.6857,86.7196 C36.7381,86.7196 36.001,87.4557 36.001,88.3521 C36.001,92.6884 36.001,92.6884 36.001,92.6884 L33.5193,92.6884 C32.5717,92.6884 31.8346,93.4245 31.8346,94.3209 C31.8346,111.36 31.8346,111.36 31.8346,111.36 C31.8346,112.257 32.5792,112.993 33.5193,112.993 C71.5358,112.993 71.5358,112.993 71.5358,112.993 C72.4609,112.993 73.2204,112.257 73.2204,111.36 C73.2204,94.3209 73.2204,94.3209 73.2204,94.3209 C73.2204,93.4245 72.4609,92.6884 71.5358,92.6884 Z M39.3703,89.9919 L65.6773,89.9919 L65.6773,92.6884 L39.3703,92.6884 L39.3703,89.9919 Z M69.8437,109.728 L35.2039,109.728 L35.2039,95.9607 L69.8512,95.9607 L69.8512,109.728 L69.8437,109.728 Z M146.967,81.6982 C144.486,68.0769 143.493,53.3552 144.049,37.8902 C144.455,26.8708 141.026,17.3672 134.13,10.451 C127.557,3.8772 118.412,0.182199 108.274,0 C107.394,0 107.394,0 107.394,0 C97.2562,0.182199 88.1037,3.8772 81.5382,10.451 C74.6343,17.3672 71.2124,26.8708 71.6185,37.8902 C74.9953,37.7736 74.9953,37.7736 74.9953,37.7736 C74.6268,27.6506 77.7328,18.9852 83.9749,12.7175 C89.9838,6.68307 98.452,3.3306 107.838,3.26501 C117.223,3.3306 125.692,6.68307 131.701,12.7175 C137.943,18.9779 141.049,27.6506 140.68,37.7736 C140.139,52.918 141.049,67.37 143.38,80.8163 C122.909,75.7001 122.909,75.7002 122.909,75.7002 L122.909,68.179 C129.339,62.2466 133.829,52.3641 134.904,40.441 C134.957,39.836 134.686,39.2603 134.16,38.9396 C133.656,38.5971 133.009,38.5607 132.453,38.8376 C131.693,39.2166 114.012,47.6998 104.747,32.3294 C111.094,26.8853 110.319,22.3522 110.199,21.7983 C106.905,22.498 106.905,22.498 106.905,22.498 C106.905,22.5271 107.447,26.6011 100.287,31.5715 C92.3528,37.0812 82.2827,38.6554 82.1774,38.67 C81.7187,38.7356 81.3201,38.9834 81.0494,39.355 C80.7786,39.734 80.6959,40.1859 80.7937,40.6304 C84.0651,55.0679 89.1942,63.347 94.3307,68.0551 C94.3307,76.9683 94.3307,76.9683 94.3307,76.9683 L97.7075,76.9683 L97.7075,70.6933 C102.16,73.5866 106.266,74.1405 108.725,74.1405 C109.079,74.1405 109.417,74.126 109.688,74.1114 C113.215,73.9 116.524,72.7048 119.525,70.7589 C119.525,76.9755 119.525,76.9755 119.525,76.9755 C119.525,77.7116 120.051,78.3675 120.811,78.5425 C145.952,84.8247 145.952,84.8247 145.952,84.8247 C151.066,85.9398 154.623,90.2542 154.623,95.3267 C154.623,104.991 154.623,104.991 154.623,104.991 L158,104.991 L158,95.3267 C158,88.7821 153.443,83.2213 146.967,81.6982 Z M109.485,70.8609 C98.4294,71.546 89.1641,60.6432 84.4787,41.5706 C87.8705,40.8709 95.4964,38.874 102.062,34.3774 C110.62,48.0642 125.165,44.9231 131.219,42.846 C129.196,56.6348 121.42,70.103 109.485,70.8609 Z"
                                        id="Shape"
                                    ></path>
                                </g>
                            </g>
                        </svg>
                    </div>
                    <div
                        className="p-16 space-y-4 leading-6 text-center border-4 border-blueGreen"
                    >
                        <h3 className="text-3xl">koloryzacja sombre</h3>
                        <p className="text-2xl font-extrabold text-gold">od 350</p>
                        <p className="w-1/2 mx-auto border-b-4 border-blueGreen"></p>
                        <h3 className="text-3xl">koloryzacja jednolita</h3>
                        <p className="text-2xl font-extrabold text-gold">od 250</p>
                        <p className="w-1/2 mx-auto border-b-4 border-blueGreen"></p>
                        <h3 className="text-3xl">baleyage</h3>
                        <p className="text-2xl font-extrabold text-gold">od 350</p>
                        <p className="w-1/2 mx-auto border-b-4 border-blueGreen"></p>
                        <h3 className="text-3xl">koloryzacja 3D</h3>
                        <p className="text-2xl font-extrabold text-gold">od 300</p>
                        <p className="w-1/2 mx-auto border-b-4 border-blueGreen"></p>
                        <h3 className="text-3xl">koloryzacja metodą Airtouch</h3>
                        <p className="text-2xl font-extrabold text-gold">od 400</p>
                        <p className="w-1/2 mx-auto border-b-4 border-blueGreen"></p>
                        <h3 className="text-3xl">dekoloryzacja włosów + kolor</h3>
                        <p className="text-2xl font-extrabold text-gold">od 450</p>
                        <p className="">* Cena zależy od ilości
                            <br />
                            zużytego materiału</p>
                    </div>
                </div>
            </div>
            <div
                className="container justify-center w-4/5 mx-auto mt-12 mb-12 lg:space-x-24 lg:flex text-primary"
            >

                <div className="flex flex-col justify-start mt-12 md:w-1/2 lg:mt-0">
                    <div className="z-10 px-12 mx-auto -mb-1 bg-white">
                        <svg
                            width="123px"
                            height="113px"
                            viewBox="0 0 123 113"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g
                                id="⚙️-Symbols"
                                stroke="none"
                                strokeWidth="1"
                                fill="none"
                                fill-rule="evenodd"
                            >
                                <g id="Group" fill="#0E7490" fill-rule="nonzero">
                                    <path
                                        d="M121.459,57.4287 L120.678,56.4075 C116.468,50.8208 114.877,48.7489 116.625,42.622 C112.966,41.6008 112.965,41.6008 112.965,41.6008 C110.727,49.5258 113.196,52.7669 117.666,58.6718 C118.424,59.6929 118.424,59.6929 118.424,59.6929 C119.198,60.7141 119.198,61.1433 119.22,61.1433 C118.952,61.5577 117.249,62.0682 116.431,62.3124 C114.631,62.8378 112.943,63.3336 112.185,64.7839 C111.917,65.2945 111.694,66.101 112.051,67.1222 C112.542,68.5725 112.393,69.6529 112.185,70.156 C111.084,69.9711 109.738,69.7787 109.738,69.7787 C109.173,73.4933 109.173,73.4933 109.173,73.4933 C109.173,73.4933 110.117,73.6413 111.069,73.7967 C111.143,74.1149 111.218,74.4182 111.24,74.6624 C109.82,75.247 107.812,76.3052 107.566,79.45 C107.529,79.9014 107.544,80.56 107.589,81.3517 C107.648,83.2016 107.775,86.6351 106.51,87.7672 C106.361,87.9152 105.863,88.374 104.391,88.1668 C99.0063,87.412 94.0756,85.2217 90.0225,81.7957 C90.0225,39.0553 90.0225,39.0553 90.0225,39.0553 L116.773,39.0553 C117.762,39.0553 118.573,38.3006 118.647,37.3238 C118.707,36.68 119.748,21.422 109.589,10.5223 C103.082,3.54443 93.5699,0 81.284,0 C58.7872,0 41.8384,15.1249 41.8384,35.1779 C41.8384,64.9023 41.8384,64.9023 41.8384,64.9023 L1.50024996,95.3592 C-0.165632035,96.6246 -0.492859035,98.9999 0.763988965,100.657 C4.65351996,105.734 4.65351996,105.734 4.65351996,105.734 C5.26334996,106.525 6.14834996,107.051 7.15977996,107.184 C7.33082996,107.206 7.50187996,107.221 7.67292996,107.221 C8.50586996,107.221 9.30162996,106.954 9.96351996,106.451 C41.8458,82.3655 41.8458,82.3655 41.8458,82.3655 L41.8458,113 L45.6386,113 L45.6386,83.3126 L47.4607,85.6879 C47.8177,86.1763 48.3903,86.4205 48.9555,86.4205 C49.3571,86.4205 49.7736,86.3095 50.1157,86.0431 C72.6571,68.9943 72.6571,68.9943 72.6571,68.9943 C73.0587,68.6909 73.319,68.2617 73.3934,67.7512 C73.4529,67.2628 73.319,66.7522 73.0141,66.3526 C69.3774,61.5799 69.3774,61.5799 69.3774,61.5799 L69.8162,61.2395 C70.6492,60.5957 70.8202,59.4266 70.1955,58.5978 C64.0154,50.51 64.0154,50.51 64.0154,50.51 C63.7105,50.1178 63.2568,49.8514 62.766,49.7774 C62.2751,49.7182 61.762,49.8514 61.3604,50.1548 C45.6312,62.0312 45.6312,62.0312 45.6312,62.0312 L45.6312,35.1705 C45.6312,17.2708 60.9662,3.76642 81.2915,3.76642 C92.4544,3.76642 101.022,6.89647 106.771,13.0456 C113.94,20.719 114.825,31.1895 114.884,35.2815 C88.1186,35.2815 88.1186,35.2815 88.1186,35.2815 C87.0774,35.2815 86.2222,36.1325 86.2222,37.1684 C86.2222,83.1498 86.2222,83.1498 86.2222,83.1498 L86.0511,83.3348 C86.1106,83.394 86.1627,83.431 86.2222,83.4828 C86.2222,112.978 86.2222,112.978 86.2222,112.978 L90.015,112.978 L90.015,86.5537 C94.1128,89.3655 98.813,91.1932 103.855,91.8888 C104.294,91.948 104.71,91.985 105.09,91.985 C106.681,91.985 108.005,91.4966 109.069,90.5495 C111.627,88.2482 111.478,84.0008 111.381,81.1963 C111.344,80.5895 111.322,80.0864 111.344,79.746 C111.441,78.673 111.724,78.5176 113.218,77.9331 C113.903,77.6519 114.453,77.1191 114.758,76.4087 C115.197,75.3728 115.063,74.0853 114.795,73.0123 C114.854,72.9531 114.892,72.9013 114.944,72.8421 C116.178,71.3918 116.52,68.9351 115.814,66.471 C116.268,66.2786 116.989,66.0714 117.502,65.9234 C119.532,65.3167 122.068,64.5619 122.812,62.342 C123.295,60.8843 122.857,59.2786 121.459,57.4287 Z M7.65805996,103.454 L3.77595996,98.3783 L9.10082996,94.3603 L12.9681,99.4364 L7.65805996,103.454 Z M68.8717,67.1444 L49.3125,81.8919 L46.8062,78.6064 L66.3655,63.8589 L68.8717,67.1444 Z M62.1413,54.2986 L66.0234,59.3748 L15.98,97.1574 L12.1128,92.0812 L62.1413,54.2986 Z"
                                        id="Shape"
                                    ></path>
                                </g>
                            </g>
                        </svg>
                    </div>
                    <div
                        className="p-16 space-y-4 leading-6 text-center border-4 border-blueGreen"
                    >
                        <h3 className="text-3xl">regeneracja włosów Joico + sauna</h3>
                        <p className="text-2xl font-extrabold text-gold">150-200</p>
                        <p className="w-1/2 mx-auto border-b-4 border-blueGreen"></p>
                        <h3 className="text-3xl">regeneracja Wella Oil Reflections + sauna</h3>
                        <p className="text-2xl font-extrabold text-gold">100-150</p>
                        <p className="w-1/2 mx-auto border-b-4 border-blueGreen"></p>
                        <h3 className="text-3xl">prostowanie Keratynowe</h3>
                        <p className="text-2xl font-extrabold text-gold">500-800</p>
                        <p className="w-1/2 mx-auto border-b-4 border-blueGreen"></p>
                        <h3 className="text-3xl">zabieg mikrodermabrazji NIOXIN</h3>
                        <p className="text-2xl font-extrabold text-gold">200</p>
                        <p className="">* Cena zawiera ekspercką konsultację
                            <br />
                            i badanie skóry głowy przy
                            <br />
                            przy użyciu mikrokamery</p>
                    </div>
                </div>
                <div className="flex flex-col justify-start mt-12 md:w-1/2 lg:mt-0">
                    <div className="z-10 px-12 mx-auto -mb-1 bg-white">
                        <svg
                            width="81"
                            height="115"
                            viewBox="0 0 81 115"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clip-path="url(#clip0_1_309)">
                                <path
                                    d="M80.7483 52.0243C80.5466 49.3265 78.8361 47.3726 77.3134 45.6412C75.8741 44.0003 74.5182 42.4427 74.3513 40.3498L74.3374 39.8631C74.24 37.6867 73.9341 31.088 72.1123 24.9622C70.7565 14.6158 64.9783 7.0089 55.4037 2.99686C41.1564 -2.98294 22.5703 0.737055 13.5102 7.62078C2.11385 16.2706 -2.45444 29.5027 1.27946 43.0129L4.51273 42.109C2.90652 36.2821 0.744058 21.5134 15.5336 10.2978C23.8497 3.96337 40.9617 0.563223 54.0895 6.09107C59.6451 8.42041 66.4941 13.3225 68.5036 23.5716L45.4466 22.5842C44.793 22.5494 44.1741 22.918 43.8751 23.502C43.5762 24.107 43.6596 24.8092 44.0768 25.3238C47.9776 30.0937 52.2469 36.1709 52.3651 37.499C52.1495 38.0344 50.2721 38.9591 49.25 39.4598C46.8581 40.6488 44.3758 41.8726 44.5427 44.2506L47.8941 44.0003C47.8941 44.1185 47.8802 44.2019 47.8594 44.2158C48.1097 43.7638 49.7507 42.9434 50.738 42.4566C53.0674 41.3024 55.7096 40.0091 55.7096 37.5824C55.7096 35.2739 51.927 29.9268 48.9649 26.0817L69.192 26.9509C70.6313 32.3953 70.9025 38.0552 70.9859 40.0091C70.9998 40.2942 70.9998 40.4958 71.0207 40.614C71.271 43.8125 73.1484 45.9541 74.8033 47.8454C76.1452 49.3682 77.2995 50.6754 77.4177 52.2816C77.515 53.6861 77.2508 53.7418 75.6933 54.006C74.6016 54.1868 72.0428 54.6248 72.2584 57.3714C72.2931 57.8581 72.5921 61.2582 72.7799 63.4694L53.8739 62.3708L47.1432 51.9895L44.3271 53.8113L51.5237 64.8948C51.8088 65.3468 52.2955 65.6179 52.8309 65.6458L71.6882 66.7652L70.7147 68.3228C70.3601 68.8721 70.3601 69.5813 70.7147 70.1167L72.8563 73.4126C71.1458 76.9796 69.5049 81.2836 70.3462 83.2097C70.7286 84.0997 71.0833 85.3722 70.4992 86.443C69.929 87.5138 68.5036 88.2856 66.4941 88.6332C63.4277 89.12 48.1931 82.8898 37.7076 78.0156L39.0635 60.2153L35.712 59.9649V60.0136L35.6772 59.9649L34.9541 58.4909L31.853 52.3303L44.3758 51.0578L47.2405 50.7588L56.1685 49.8549L55.8348 46.5243L47.5604 47.3587L44.4453 47.6785L30.2467 49.1387L25.9566 40.5375C29.3081 37.9787 30.4971 33.32 28.5362 29.4054C26.3251 24.9831 20.9155 23.1961 16.5002 25.4003C12.0779 27.6253 10.2909 33.0211 12.4951 37.4364C14.0665 40.5653 17.2511 42.394 20.533 42.394C21.3396 42.394 22.1601 42.2619 22.9597 42.0394L26.6936 49.5072L18.4053 50.3416C17.2859 46.5938 13.7814 43.9307 9.79721 43.9307C9.49822 43.9307 9.19227 43.9446 8.89328 43.9794C3.97037 44.487 0.389442 48.9093 0.890077 53.8322C1.3629 58.4352 5.26368 61.884 9.81806 61.884C10.1171 61.884 10.423 61.8701 10.722 61.8354C15.0747 61.3973 18.3914 57.8859 18.7391 53.6792L28.2998 52.7057L34.8776 65.8335L35.2809 65.6179L34.2796 78.9126C34.231 79.6149 34.5995 80.2685 35.2322 80.5535C38.396 82.0415 50.8215 87.8058 59.4922 90.5315C47.5047 99.8767 50.7241 114.833 50.7589 115L54.0269 114.249C53.8948 113.644 50.9118 99.4803 63.7406 91.6788C64.728 91.8804 65.5971 91.9986 66.2855 91.9986C66.5706 91.9986 66.8348 91.9847 67.0712 91.95C70.972 91.2824 72.6964 89.4537 73.4543 88.0492C74.4069 86.2761 74.393 84.0789 73.4682 81.9859C73.3153 81.0959 74.6433 77.3968 76.2982 74.0523C76.5485 73.5308 76.5138 72.898 76.2009 72.3974L74.1218 69.2128L76.034 66.1673C76.2356 65.8474 76.3052 65.4789 76.2704 65.1312H76.2843C76.2843 65.1312 75.7628 59.068 75.6307 57.4479C75.8323 57.3992 76.0827 57.3644 76.2704 57.3297C77.7167 57.0585 81.096 56.4744 80.7483 52.0243ZM23.0432 38.4446C20.2619 39.8492 16.8826 38.7158 15.4919 35.9484C14.1013 33.1671 15.2207 29.7878 18.0021 28.3971C18.8086 27.9938 19.6569 27.7922 20.5122 27.7922C22.5703 27.7922 24.5659 28.9325 25.5324 30.9073C26.93 33.6677 25.8106 37.0678 23.0432 38.4446ZM10.3882 58.5048C7.30794 58.8246 4.54749 56.5787 4.22764 53.4845C3.90779 50.4042 6.1537 47.6438 9.2479 47.3239C12.3143 47.0041 15.0886 49.2639 15.4085 52.3442C15.7283 55.4175 13.4685 58.1849 10.3882 58.5048ZM12.5924 63.372L9.42868 64.4428C12.509 73.5864 15.6379 86.2274 13.0652 94.5157L16.2637 95.5031C19.1076 86.3665 15.8465 72.9884 12.5924 63.372Z"
                                    fill="#0E7490"
                                ></path>
                            </g>
                            <defs>
                                <clipPath id="clip0_1_309">
                                    <rect
                                        width="80.7691"
                                        height="115"
                                        fill="white"
                                    ></rect>
                                </clipPath>
                            </defs>
                        </svg>

                    </div>
                    <div
                        className="p-16 space-y-4 leading-6 text-center border-4 border-blueGreen"
                    >
                        <h3 className="text-3xl">strzyżenie męskie*</h3>
                        <p className="text-2xl font-extrabold text-gold">70</p>
                        <p className="w-1/2 mx-auto border-b-4 border-blueGreen"></p>
                        <h3 className="text-3xl">strzyżenie męskie + trymowanie brody</h3>
                        <p className="text-2xl font-extrabold text-gold">110</p>
                        <p className="w-1/2 mx-auto border-b-4 border-blueGreen"></p>
                        <h3 className="text-3xl">strzyżenie męskie + trymowanie brody
                            +konturowanie brzytwą</h3>
                        <p className="text-2xl font-extrabold text-gold">125</p>
                        <p className="w-1/2 mx-auto border-b-4 border-blueGreen"></p>
                        <h3 className="text-3xl">trymowanie brody</h3>
                        <p className="text-2xl font-extrabold text-gold">45</p>
                        <p className="w-1/2 mx-auto border-b-4 border-blueGreen"></p>
                        <h3 className="text-3xl">trymowanie brody+ konturowanie brzytwą</h3>
                        <p className="text-2xl font-extrabold text-gold">60</p>
                        <p className="w-1/2 mx-auto border-b-4 border-blueGreen"></p>
                        <h3 className="text-3xl">odsiwianie włosów</h3>
                        <p className="text-2xl font-extrabold text-gold">65</p>
                        <p className="">* Cena strzyżenia zawiera
                            <br />
                            profesionalny dobór fryzury,
                            <br />mycie włosów z masażem<br />
                            oraz stylizacje</p>
                    </div>
                </div>
            </div>

        </>
    );
};
export default Offer;
