import Card from "./Card";
function Services() {
    return (
        <div className="container services">
            <h2 className="main-title text-center">SERVICES</h2>
            <div className="card-cover">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-4 mb-2">
                            <Card title="Web Development" img="card1.png" text="Freelancers offer website development services using various technologies such as HTML, CSS, JavaScript, PHP, and frameworks like WordPress, Joomla, or Shopify. They can create websites from scratch, customize existing ones, or fix any issues. " />
                        </div>
                        <div className="col-md-4 mb-2">
                            <Card title="Mobile App Development" img="card2.png" text="You can find freelancers who specialize in developing mobile applications for iOS (using Swift or Objective-C) or Android (using Java or Kotlin). They can create apps for different purposes, including business, gaming, utilities, and more." />
                        </div>
                        <div className="col-md-4 mb-2">
                            <Card title="E-commerce Development" img="card3.png" text="We offers services to set up, customize, and optimize online stores using platforms like WooCommerce, Magento, or Shopify. Freelancers can help you with product listing, payment integration, and creating a seamless shopping experience." />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 mb-2">
                            <Card title="Database Management" img="card1.png" text="If you need assistance with database creation, management, or optimization, you can find freelancers who specialize in SQL, MySQL, PostgreSQL, or other database technologies. They can help design database schemas, write efficient queries, and ensure data integrity." />
                        </div>
                        <div className="col-md-4 mb-2">
                            <Card title="Technical Support and IT Services" img="card2.png" text=" we provides support services like system administration, network setup and troubleshooting, software installation and configuration, and general IT consultation. Freelancers can assist with resolving technical issues, setting up servers, or managing cloud infrastructure." />
                        </div>
                        <div className="col-md-4 mb-2">
                            <Card title=" QA and Testing" img="card3.png" text="Freelancers offer quality assurance and testing services for software applications. They can perform manual and automated testing, write test scripts, identify and report bugs, and provide feedback for improving software quality." />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 mb-2">
                            <Card title=" Software Development and Customization" img="card1.png" text="You can hire freelancers to develop custom software solutions tailored to your specific requirements. Whether it's a desktop application, a web-based tool, or a specialized software module, programmers on Fiverr can help bring your ideas to life." />
                        </div>
                        <div className="col-md-4 mb-2">
                            <Card title="APIs and Integrations" img="card2.png" text="We provides services for integrating different software systems or developing custom APIs. Freelancers can help you connect your applications, automate processes, or build integrations with third-party services." />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
export default Services;
