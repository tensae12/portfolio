import "./Experience.css";
const Experience = () => {
  const items = [
    {
      title: "CPU Validation Engineer",
      company: "Intel",
      date: "2021 - current",
      description: "Full-time",
      points: [
        "Analyzed system-level diagnostic failures for both hardware and software and support team achieve 99% pass rate.",
        "Perform analysis on test results and write a detailed report to contribute insight into technical problems and possible solutions.",
        "Develop debug scripts to enhance the validation process, facilitating quicker and more accurate detection of problems.",
        "Tracked process validation schedules and projects.",
      ],
      image:
        "https://marketscale.com/wp-content/uploads/2023/06/118521736_10157243221741850_19095419556813004_n.png",
    },
    {
      title: "System Validation Engineer",
      company: "Intel",
      date: "2020 - 2021",
      description: "Intern",
      points: [
        "Developed a CLI version of Lane Margining tool in python which allows users to run SSD validations that test the quality, reliability, compatibility and data integrity of drives.",
        "Designed comprehensive testing plans aimed at validating the drive's quality, reliability, compatibility, and data integrity.",
        "Collaborated closely with the team to improve the core codebase of the Lane Margining tool, enhancing its features and optimizing performance.",
      ],
      image:
        "https://marketscale.com/wp-content/uploads/2023/06/118521736_10157243221741850_19095419556813004_n.png",
    },
  ];

  const items2 = [
    {
      python:
        "https://www.python.org/static/community_logos/python-logo-master-v3-TM-flattened.png",
      java: "https://static.vecteezy.com/system/resources/previews/022/101/050/original/java-logo-transparent-free-png.png",
      C: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png",
      SQL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1dGt3GB1oELhdEBDZTibHQEAE4TY1NSMFB-l1UUeM&s",
      Assembly:
        "https://user-images.githubusercontent.com/5421823/62779159-4cf76880-baaa-11e9-8318-e20a1aaa913a.png",
      Android:
        "https://www.androidauthority.com/wp-content/uploads/2023/09/New-Android-bugdroid-logo-3D-and-Android-wordmark.jpg",
      Net: "https://logos-world.net/wp-content/uploads/2022/01/NET-Framework-Symbol.png",
      UI: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg7oY88IWmHkCfoJSDnvyyibW4Hll6_Nv-Bw&usqp=CAU",
      Docker:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwPnnTDwnPXg-33eLXtj2qz45FBlCiGSsf1LP3Sovz&s",
      Kubernetes:
        "https://i1.wp.com/mlinproduction.com/wp-content/uploads/2019/04/kubernetes_logo.png?fit=730%2C389&ssl=1",
      AWS: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/2560px-Amazon_Web_Services_Logo.svg.png",
    },
  ];
  return (
    <div>
      <div className="experience">
        <h1 className="header">Work Experience</h1>
        <div className="work-items">
          {items.map((item) => (
            <div className="item" key={Math.random()}>
              <img src={item.image} alt="logo" className="logo" />
              <div className="item-content">
                <div className="item-header">
                  <h2 className="no-margin">{item.title}</h2>
                  <h3 className="no-margin">{item.company}</h3>
                  <p className="no-margin text-muted">{item.date} </p>
                </div>
                <p className="description">{item.description}</p>
                <ul className="points">
                  {item.points.map((point) => (
                    <li key={Math.random()}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="skills">
        <h4 className="header2">Technical Skills</h4>
        <div className="skill-items">
          {items2.map((item2) => (
            <div className="item2" key={Math.random()}>
              <img
                src={item2.python}
                alt="logo1"
                className="logo1 logo-common"
              />
              <img src={item2.java} alt="logo2" className="logo2 logo-common" />
              <img src={item2.C} alt="logo3" className="logo3 logo-common" />
              <img src={item2.SQL} alt="logo4" className="logo4 logo-common" />
              <img src={item2.Assembly} alt="logo5" className="logo5" />
              <img src={item2.Android} alt="logo6" className="logo6" />
              <img src={item2.UI} alt="logo7" className="logo7" />
              <img src={item2.Docker} alt="logo8" className="logo8" />
              <img src={item2.Kubernetes} alt="logo9" className="logo9" />
              <img src={item2.AWS} alt="logo10" className="logo10" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Experience;
