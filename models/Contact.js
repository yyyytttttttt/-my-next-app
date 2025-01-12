import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema({
  companyName: { type: String, required: false },
  businessDescription: { type: String, required: false },
  productsServices: { type: String, required: false },
  contactPhone: { type: String, required: false },
  contactEmail: { type: String, required: false },
  contactAddress: { type: String, required: false },
  telegram: { type: String, required: false },
  instagram: { type: String, required: false },
  vk: { type: String, required: false },
  yandexZen: { type: String, required: false },
  socialMediaWishes: { type: String, required: false },
  websiteGoals: {
    salesIncrease: { type: Boolean, required: false },
    newClients: { type: Boolean, required: false },
    imageImprovement: { type: Boolean, required: false },
    information: { type: Boolean, required: false },
    otherGoals: { type: String, required: false },
  },
  websiteStructure: {
    mainPage: { type: Boolean, required: false },
    aboutCompany: { type: Boolean, required: false },
    servicesProducts: { type: Boolean, required: false },
    portfolio: { type: Boolean, required: false },
    newsBlog: { type: Boolean, required: false },
    contacts: { type: Boolean, required: false },
    personalAccount: { type: Boolean, required: false },
    otherStructure: { type: String, required: false },
  },
  additionalFunctions: {
    onlineApplications: { type: Boolean, required: false },
    chatbot: { type: Boolean, required: false },
    crmIntegration: { type: Boolean, required: false },
    siteSearch: { type: Boolean, required: false },
    otherFunctions: { type: String, required: false },
  },
  designPreferences: {
    minimalism: { type: Boolean, required: false },
    corporate: { type: Boolean, required: false },
    creative: { type: Boolean, required: false },
    otherPreferences: { type: String, required: false },
    needBrandbook: { type: Boolean, required: false },
    siteExamples: { type: String, required: false },
  },
  content: {
    photos: { type: Boolean, required: false },
    videos: { type: Boolean, required: false },
    otherMaterials: { type: String, required: false },
    createFromScratch: {
      photoshoot: { type: Boolean, required: false },
      otherCreationNeeds: { type: String, required: false },
    },
  },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Contact || mongoose.model('Contact', ContactSchema);
