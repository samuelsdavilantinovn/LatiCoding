// import {useParams} from 'react-router-dom';

// function About() {
//     const params = useParams();

//     <>
//         <h1>Tentang {params.nama}</h1>
//         <p>Saya berumur {params.umur}</p>
//     </>
// }

function About() {
    let projects = [
        {
            name: "S01E30",
            pic: "https://d1ls7pon4sjd1u.cloudfront.net/04/00000000000062682205/b8106e98-709a-4065-8837-f17beb11fc48.png",
            desc: "Page 01"
        },
        {
            name: "S01E30 ",
            pic: "https://d1ls7pon4sjd1u.cloudfront.net/ba/00000000000062682224/e50ccc97-6f58-42e9-b51f-e91936127b0e.png",
            desc: "Page 02"
        },
        {
            name: "S01E30",
            pic: "https://d1ls7pon4sjd1u.cloudfront.net/fe/00000000000062682214/6115a6f8-a6d6-493b-ac75-2d1c9ad453f8.png",
            desc: "Page 03"
        },
        {
            name: "S01E30",
            pic: "https://d1ls7pon4sjd1u.cloudfront.net/b5/00000000000062682238/821aa7a2-a890-49a9-9155-9e3ff3c71d35.png",
            desc: "Page 04"
        },
        {
            name: "S01E30",
            pic: "https://d1ls7pon4sjd1u.cloudfront.net/c6/00000000000062682245/5a44a640-cfb3-4258-8809-b7b2f4e229ef.png",
            desc: "Page 05"
        },
        {
            name: "S01E30",
            pic: "https://d1ls7pon4sjd1u.cloudfront.net/be/00000000000062682263/9c0537df-fe7a-4769-ba26-a12ce983706f.png",
            desc: "Page 06"
        },
        {
            name: "S01E30",
            pic: "https://d1ls7pon4sjd1u.cloudfront.net/67/00000000000062682274/c3b67411-74a1-4ac0-b098-693ab51617fb.png",
            desc: "Page 07"
        },
        {
            name: "S01E30",
            pic: "https://d1ls7pon4sjd1u.cloudfront.net/b8/00000000000062682658/363468b7-0d90-411e-8562-23556361861a.png",
            desc: "Epilogue 01"
        },
        {
            name: "S01E30",
            pic: "https://d1ls7pon4sjd1u.cloudfront.net/9e/00000000000062689142/d4d2a2e0-d6a1-4742-ae44-987922ab90d4.png",
            desc: "Epilogue 02"
        }
    ]
    return (
        <>
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <img src="https://d1ls7pon4sjd1u.cloudfront.net/08/00000000000065799875/a40b33c8-52ea-4f24-ac40-d0ac00a41981.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">About ANotSoScaryStory</h5>
                            <p className="card-text">H.U.M.A.N.</p>
                            <p className="card-text">Edward Linjaya (panggilan Edo) didiagnosa memiliki penyakit mematikan yang dapat mengakhiri hidupnya. Menurut dokter, dia tidak akan hidup lebih lama dari 2 bulan. Padahal, ulang tahun Vania (perempuan yang dia sukai) hanya tinggal 2 bulan lagi!
                                Apa yang akan dia lakukan untuk mengungkapkan perasaannya, sebelum hidupnya berakhir?
                                Genre: Horor, Komedi, Romantik, Kehidupan Sehari-hari, Fantasi, Supernatural
                                Romansa Komedi Fiksi Fantasi Petualangan
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="row">
                        {projects.map((project) => (
                            <div className="col-md-6">
                                <div className="card mb-4">
                                    <img src={project.pic} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{project.name}</h5>
                                        <p className="card-text">
                                            <small>{project.desc}</small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </>
    )
}

export default About;