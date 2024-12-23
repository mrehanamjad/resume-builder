import conf from "@/cof/conf";
import { Client, ID, Databases, Storage, Query, Account } from "appwrite";
import { ResumeDataI } from "@/lib/types";

export class Services {
    client = new Client()
    databases; // variable
    bucket; // in dorcs they say it stoage. its a veriable so you can give name as you wish

    constructor() {
        this.client
            .setEndpoint("https://cloud.appwrite.io/v1")
            .setProject("675d2cba00178c3f11fb")
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }


    async createResume({ 
        resumeId, userId, firstName, lastName, email,phone, address, image, jobTitleApplyFor, linkedin, personalWebsite, github, aboutMe,education,workExperience,skills,courses,projects
     }: ResumeDataI) { 
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteMainCollectionId,
                resumeId, 
                {
                    userId,
                    firstName,
                    lastName,
                    email,
                    phone,
                    address,
                    image,
                    jobTitleApplyFor,
                    linkedin,
                    personalWebsite,
                    github,
                    aboutMe,
                    education,
                    workExperience,
                    skills,
                    projects,
                    courses,
                }
            )
        } catch (error) {
            console.log("Appwrite Service :: createResume :: error", error);
        }
    }

    async updateResume(
        slug:string, // Resume id 
        { title, content,category, featuredImage, status,updatedOn }: {
            title: string;
            content: string;
            category: string;
            featuredImage: string;
            status: string;
            updatedOn: string;
        }
    ) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteMainCollectionId,
                slug,
                {
                    title,
                    content,
                    category,
                    featuredImage,
                    status,
                    updatedOn
                }

            )
        } catch (error) {
            console.log("Appwrite service :: updateResume :: error", error);
        }
    }

    async deleteResume(slug:string) {
        try {
            await this.databases.deleteDocument(conf.appwriteDatabaseId, conf.appwriteMainCollectionId, slug)

            return true
        } catch (error) {
            console.log("Appwrite :: deleteResume :: error", error);

            return false
        }
    }

    //one Resume
    async getResume(slug:string) {
        try {
           return await this.databases.getDocument(conf.appwriteDatabaseId, conf.appwriteMainCollectionId, slug) // slug as document_id
        } catch (error) {
            console.log("Appwrite :: getResume :: error", error);
            return false
        }
    }

    // all Resumes
    async getResumes(queres = [Query.equal("status", "active")]) {
        // here in above parameter: queries are jus variable the main thing is [Query.equal("status","active")]
        // in [Query.equal("status","active")], status is keythat me created in appwrite website -> databases -> blog -> Articles -> indexes
        // we can also add more in quesries -> read docs
        // using enums is more better.

        try { 
            return await this.databases.listDocuments( //returns array
                conf.appwriteDatabaseId,
                conf.appwriteMainCollectionId,
                queres, // we can also define quries here instude of defining in above parameter -> read docs

                // here we can also add paginations --> read docs
            )
        } catch (error) {
            console.log("Appwrite :: getResumes :: error", error);
            return false
        }
    }


    // upload file sevice  (homeWork: do this in separate file)

    async uploadFile(file:any) { // pass complete file as parameter not file name
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            ) // here return will be fileId which we pass in getFilePreview, deleteFile etc methods

        } catch (error) {
            console.log("Appwrite :: uploadFile:: error", error);
            return false
        }
    }

    async deleteFile(fileId:string) {
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            console.log("Appwrite :: deleteFile :: error", error);
            return false
        }
    }

    getFilePreview(fileId:string) { // returns image url
        try {
            return this.bucket.getFilePreview(
                conf.appwriteBucketId,
                fileId
            )
        } catch (error) {
            console.log("Appwrite :: getFilePreview :: error", error);
            return false
        }
    }

}

const services = new Services()

export default services;