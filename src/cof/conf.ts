const conf = {
    appwriteUrl : String(process.env.NEXT_PUBLIC_APPWRITE_URL),
    appwriteProjectId : String(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID),
    appwriteDatabaseId : String(process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID),
    appwriteMainCollectionId : String(process.env.NEXT_PUBLIC_APPWRITE_MAIN_COLLECTION_ID),
    appwriteSkillCollectionId : String(process.env.NEXT_PUBLIC_APPWRITE_SKILLS_COLLECTION_ID),
    appwriteProjectCollectionId : String(process.env.NEXT_PUBLIC_APPWRITE_PROJECTS_COLLECTION_ID),
    appwriteCoursesCollectionId : String(process.env.NEXT_PUBLIC_APPWRITE_COURSES_COLLECTION_ID),
    appwriteWorkExperienceCollectionId : String(process.env.NEXT_PUBLIC_APPWRITE_WORKEXPERIENCES_COLLECTION_ID),
    appwriteEducationCollectionId : String(process.env.NEXT_PUBLIC_APPWRITE_EDUCATIONS_COLLECTION_ID),
    appwriteBucketId : String(process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID),
    
}


export default conf