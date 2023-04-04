import axios from "axios";
//the base url to be used in the site

const instance = axios.create({
  baseURL: "https://demo.proxima-core-engine.proximaagents.com/api/",
  //   baseURL: "http://proximadminserver.buzz/api/",
  //baseURL: "https://murmuring-spire-64412.herokuapp.com/",
});

export const login = (email, password) => {
  return instance.post("users/login", { email, password });
};

export const signup = (name, email, password) => {
  return instance.post("users/", { name, email, password });
};

//* features to be added on production
export const logout = () => {
  return instance.post("/logout");
};

// export const user = () => {
//   return instance.post("/user");
// };

// export const profiles = () => {
//   return instance.post("/profiles");
// };

// export const createchatinstance = () => {
//   return instance.post("/createchatinstance");
// };

// export const listchats = () => {
//   return instance.post("/listchats");
// };

// export const retrievechatbotchats = () => {
//   return instance.post("/retrievechatbotchats");
// };

// export const countallchats = () => {
//   return instance.post("/countallchats");
// };

// export const hourlychats = () => {
//   return instance.post("/hourlychats");
// };

// export const mostpopulartopics = () => {
//   return instance.post("/mostpopulartopics");
// };

// export const cumulativehourlychats = () => {
//   return instance.post("/cumulativehourlychats");
// };

// export const hourlycountescalatedissues = () => {
//   return instance.post("/hourlycountescalatedissues");
// };

// export const hourlyqueriesreceived = () => {
//   return instance.post("/hourlyqueriesreceived");
// };

// export const hourlyclientsatisfaction = () => {
//   return instance.post("/hourlyclientsatisfaction");
// };

// export const engagementfrequency = () => {
//   return instance.post("/engagementfrequency");
// };

// export const communicationchannels = () => {
//   return instance.post("/communicationchannels");
// };

// export const studentfeetable = () => {
//   return instance.post("/studentfeetable");
// };

// export const retrievemeetingtermdates = () => {
//   return instance.post("/retrievemeetingtermdates");
// };
// export const triptermdates = () => {
//   return instance.post("/triptermdates");
// };
// export const openingclosingtermdates = () => {
//   return instance.post("/openingclosingtermdates");
// };
// export const retrieveopeningclosingtermdates = () => {
//   return instance.post("/retrieveopeningclosingtermdates");
// };
// export const summarizedchatspdf = () => {
//   return instance.post("/summarizedchatspdf");
// };
// export const summarizedchatscsv = () => {
//   return instance.post("/summarizedchatscsv");
// };

// client id, client secret, search engine

export default instance;
