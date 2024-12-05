// this was for schema for mongodb but this will now be used to visualize the schema used in firestore db 
/***
 * user=> student and teacher 
 * teacher={
 * 1) can open class for teaching(physical)
 *      - physical id
 *      - max of 30 users
 *      - keeps track of each students id 
 *      - can help in evaluation process
 *      - and so on (will think later)
 * }
 * 
 * 
 * student=>{
 *      - has to join class for reading 
 *      - will have a goal assigned to them according to their marksheet(number of each subs)
 *      - can access the recources for the class attended
 *      - and so on (will think later)
 * }
 * 
 * student_profile => {
 *      - will show classes joined (each will have associated id with them)
 *      - will be given incentives to join and excel(accordig to their attendace and marks gained)
 *      - will have a 
 * }
 * 
 * teacher_profile => {
 *      - will have ability to open classroom and all
 * }
 * 
 * Admin => {
 *      - will have access to all the data
 *      - will have ability to add new teachers and students
 *      - will have ability to remove teachers and students
 *      - will have ability to add new classes
 *      - will have ability to remove classes
 *      - will have ability to add new subjects
 *      - will have ability to remove subjects
 * }
 * 
 * 
 * 
 * 
 */



