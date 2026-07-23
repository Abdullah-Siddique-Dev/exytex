import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ServicesPage from '../pages/ServicesPage';
import WebDevelopmentPage from '../pages/WebDevelopmentPage';
import MobileAppDevelopmentPage from '../pages/MobileAppDevelopmentPage';
import AndroidPage from '../pages/AndroidPage';
import iOSPage from '../pages/iOSPage';
import GraphicDesignPage from '../pages/GraphicDesignPage';
import AIMLPage from '../pages/AIMLPage';
import UIUXDesignPage from '../pages/UIUXDesignPage';
import EcommercePage from '../pages/EcommercePage';
import CloudSolutionsPage from '../pages/CloudSolutionsPage';
import DigitalMarketingPage from '../pages/DigitalMarketingPage';
import SEOPage from '../pages/SEOPage';
import ITStaffingPage from '../pages/ITStaffingPage';
import SupportPage from '../pages/SupportPage';
import ContactPage from '../pages/ContactPage';
import BlockchainPage from '../pages/BlockchainPage';
import EthereumPage from '../pages/EthereumPage';
import TechnologiesPage from '../pages/TechnologiesPage';
import BlockchainTechPage from '../pages/tech/BlockchainTechPage';
import TechnologyDetailPage from '../pages/TechnologyDetailPage';
import SmartContractPage from '../pages/SmartContractPage';
import QuorumPage from '../pages/QuorumPage';
import CordaPage from '../pages/CordaPage';
import StellarPage from '../pages/StellarPage';
import HyperledgerPage from '../pages/HyperledgerPage';
import NFTPage from '../pages/NFTPage';
import BlockchainServicesPage from '../pages/BlockchainServicesPage';
import AmazonFBAPage from '../pages/AmazonFBAPage';
import InsightDetailPage from '../pages/InsightDetailPage';
import AWSPage from '../pages/AWSPage';
import AzurePage from '../pages/AzurePage';
import GoogleCloudPage from '../pages/GoogleCloudPage';
import CaseStudyDetailPage from '../pages/CaseStudyDetailPage';
import InsurancePage from '../pages/InsurancePage';
import InsuranceBenefitsPage from '../pages/InsuranceBenefitsPage';
import InsuranceServicesPage from '../pages/InsuranceServicesPage';
import IndustriesPage from '../pages/IndustriesPage';
import HireDeveloperPage from '../pages/HireDeveloperPage';
import HireDeveloperMainPage from '../pages/HireDeveloperMainPage';
import AboutPage from '../pages/AboutPage';
import OurWorkPage from '../pages/OurWorkPage';
import ProjectDetailPage from '../pages/ProjectDetailPage';
import BlogPage from '../pages/BlogPage';
import BlogDetailPage from '../pages/BlogDetailPage';
import AutomotivePage from '../pages/AutomotivePage';
import DigitalAgencyPage from '../pages/DigitalAgencyPage';
import DigitalAgencies from '../pages/DigitalAgencies';
import DigitalAgenciesSectionPage from '../pages/DigitalAgenciesSectionPage';
import EducationPage from '../pages/EducationPage';
import EnergyUtilitiesPage from '../pages/EnergyUtilitiesPage';
import HiTechPage from '../pages/HiTechPage';
import ManufacturingPage from '../pages/ManufacturingPage';
import HealthcarePage from '../pages/HealthcarePage';
import FinancialServicesPage from '../pages/FinancialServicesPage';
import RetailEcommercePage from '../pages/RetailEcommercePage';
import NonProfitsPage from '../pages/NonProfitsPage';
import PublishingMediaPage from '../pages/PublishingMediaPage';
import HireKotlinDeveloperPage from '../pages/HireKotlinDeveloperPage';
import HireDeveloperDetailPage from '../pages/HireDeveloperDetailPage';
import SimpleHirePage from '../pages/SimpleHirePage';
import GenericDeveloperPage from '../pages/hire-developer/GenericDeveloperPage';
import Dynamics365Page from '../pages/insights/Dynamics365Page';
import PythonDevelopmentPage from '../pages/insights/PythonDevelopmentPage';
import SharePointAutomationPage from '../pages/insights/SharePointAutomationPage';
import MaintenanceSupportPage from '../pages/services/MaintenanceSupportPage';
import APIIntegrationPage from '../pages/services/APIIntegrationPage';
import MicrosoftPage from '../pages/MicrosoftPage';
import DotNetPage from '../pages/DotNetPage';
import SharePointPage from '../pages/SharePointPage';
import Office365Page from '../pages/Office365Page';
import PowerAppsPage from '../pages/PowerAppsPage';
import SalesforcePage from '../pages/SalesforcePage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/industries" element={<IndustriesPage />} />
      <Route path="/hire-developer" element={<HireDeveloperMainPage />} />
      <Route path="/hire-developer/:type" element={<GenericDeveloperPage />} />
      <Route path="/hire-developer-old" element={<HireDeveloperPage />} />
      <Route path="/hire-developer/simple" element={<SimpleHirePage />} />
      <Route path="/hire-developer/detail" element={<HireDeveloperDetailPage />} />
      <Route path="/hire-kotlin-developer" element={<HireKotlinDeveloperPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/our-work" element={<OurWorkPage />} />
      <Route path="/project/:slug" element={<ProjectDetailPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/:slug" element={<BlogDetailPage />} />
      <Route path="/insights/:slug" element={<InsightDetailPage />} />
      <Route path="/case-study/:slug" element={<CaseStudyDetailPage />} />
      <Route path="/web-development" element={<WebDevelopmentPage />} />
      <Route path="/mobile-app-development" element={<MobileAppDevelopmentPage />} />
      <Route path="/android" element={<AndroidPage />} />
      <Route path="/android-app-development" element={<AndroidPage />} />
      <Route path="/ios" element={<iOSPage />} />
      <Route path="/ios-app-development" element={<iOSPage />} />
      <Route path="/graphic-design" element={<GraphicDesignPage />} />
      <Route path="/ai-ml" element={<AIMLPage />} />
      <Route path="/ui-ux-design" element={<UIUXDesignPage />} />
      <Route path="/ecommerce" element={<EcommercePage />} />
      <Route path="/cloud-solutions" element={<CloudSolutionsPage />} />
      <Route path="/aws" element={<AWSPage />} />
      <Route path="/maintenance-ongoing-support" element={<MaintenanceSupportPage />} />
      <Route path="/api-integration-saas-solutions" element={<APIIntegrationPage />} />
      <Route path="/azure" element={<AzurePage />} />
      <Route path="/google-cloud" element={<GoogleCloudPage />} />
      <Route path="/microsoft" element={<MicrosoftPage />} />
      <Route path="/dotnet" element={<DotNetPage />} />
      <Route path="/sharepoint" element={<SharePointPage />} />
      <Route path="/office-365" element={<Office365Page />} />
      <Route path="/powerapps" element={<PowerAppsPage />} />
      <Route path="/salesforce" element={<SalesforcePage />} />
      <Route path="/digital-marketing" element={<DigitalMarketingPage />} />
      <Route path="/seo" element={<SEOPage />} />
      <Route path="/seo-company-dubai" element={<SEOPage />} />
      <Route path="/it-staffing" element={<ITStaffingPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="/blockchain" element={<BlockchainPage />} />
      <Route path="/blockchain-services" element={<BlockchainServicesPage />} />
      <Route path="/ethereum" element={<EthereumPage />} />
      <Route path="/smart-contracts" element={<SmartContractPage />} />
      <Route path="/quorum" element={<QuorumPage />} />
      <Route path="/corda" element={<CordaPage />} />
      <Route path="/stellar" element={<StellarPage />} />
      <Route path="/hyperledger" element={<HyperledgerPage />} />
      <Route path="/nft" element={<NFTPage />} />
      <Route path="/nft-marketplace" element={<NFTPage />} />
      <Route path="/amazon-fba" element={<AmazonFBAPage />} />
      <Route path="/amazon-services" element={<AmazonFBAPage />} />
      <Route path="/insurance-services" element={<InsuranceServicesPage />} />
      <Route path="/insurance-benefits" element={<InsuranceBenefitsPage />} />
      <Route path="/digital-agency" element={<DigitalAgencyPage />} />
      <Route path="/education" element={<EducationPage />} />
      <Route path="/energy-utilities" element={<EnergyUtilitiesPage />} />
      <Route path="/technologies" element={<TechnologiesPage />} />
      <Route path="/technologies/blockchain" element={<BlockchainTechPage />} />
      <Route path="/technologies/:tech" element={<TechnologyDetailPage />} />
      <Route path="/digital-agencies" element={<DigitalAgencies />} />
      <Route path="/digital-agencies-section" element={<DigitalAgenciesSectionPage />} />
      <Route path="/industries/automotive" element={<AutomotivePage />} />
      <Route path="/industries/digital-agencies" element={<DigitalAgenciesSectionPage />} />
      <Route path="/industries/education" element={<EducationPage />} />
      <Route path="/industries/energy-utilities" element={<EnergyUtilitiesPage />} />
      <Route path="/industries/insurance" element={<InsuranceServicesPage />} />
      <Route path="/industries/manufacturing" element={<ManufacturingPage />} />
      <Route path="/industries/healthcare" element={<HealthcarePage />} />
      <Route path="/industries/financial-services" element={<FinancialServicesPage />} />
      <Route path="/industries/retail-ecommerce" element={<RetailEcommercePage />} />
      <Route path="/industries/non-profits" element={<NonProfitsPage />} />
      <Route path="/industries/publishing-media" element={<PublishingMediaPage />} />
      <Route path="/insights/dynamics-365" element={<Dynamics365Page />} />
      <Route path="/insights/python-development" element={<PythonDevelopmentPage />} />
      <Route path="/insights/sharepoint-automation" element={<SharePointAutomationPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
};

export default AppRoutes;
