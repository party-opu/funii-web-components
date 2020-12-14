import { functions } from './firebase'
import { CreateContact } from './props'
export const createContact = async (value: CreateContact) => {
  const uid = process.env.FUNII_ASSIST_UID
  const projectID = process.env.FUNII_ASSIST_PROJECT_ID
  const webID = process.env.FUNII_ASSIST_WEB_ID

  await functions.httpsCallable('createContact')({
    uid,
    projectID,
    webID,
    companyName: value.companyName,
    department: value.department,
    name: value.name,
    email: value.email,
    phoneNumber: value.phoneNumber,
    message: value.message,
  })
}
