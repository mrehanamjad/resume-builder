const conf = {
    appwriteUrl : String(process.env.APPWRITE_URL),
    appwriteProjectId : String(process.env.APPWRITE_PROJECT_ID),
    appwriteDatabaseId : String(process.env.APPWRITE_DATABASE_ID),
    appwriteMainCollectionId : String(process.env.APPWRITE_MAIN_COLLECTION_ID),
    appwriteSkillCollectionId : String(process.env.APPWRITE_SKILLS_COLLECTION_ID),
    appwriteProjectCollectionId : String(process.env.APPWRITE_PROJECTS_COLLECTION_ID),
    appwriteCoursesCollectionId : String(process.env.APPWRITE_COURSES_COLLECTION_ID),
    appwriteWorkExperienceCollectionId : String(process.env.APPWRITE_WORKEXPERIENCES_COLLECTION_ID),
    appwriteEducationCollectionId : String(process.env.APPWRITE_EDUCATIONS_COLLECTION_ID),
    appwriteBucketId : String(process.env.APPWRITE_BUCKET_ID),
    
}

export default conf