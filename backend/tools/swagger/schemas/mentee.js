module.exports = {
  components: {
    schemas: {
      /**
       * @openapi
       * components:
       *  schemas:
       *    MenteeResponseDto:
       *      type: object
       *      properties:
       *        id:
       *          type: string
       *        name:
       *          type: string
       *        email:
       *          type: string
       *        title:
       *          type: string
       *        company:
       *          type: string
       *        experience:
       *          type: number
       *        expertise:
       *          type: string
       *
       *      example:
       *        id: 'f9cddd3a-0e9e-4c9f-94d1-d99592b7cdae'
       *        name: 'Jane Doe'
       *        email: 'jane.doe@meeter.com'
       *        title: 'Developer'
       *        company: 'Google'
       *        experience: 7
       *        expertise: 'Inclusive Leadership, Public Speaking'
       */
      MenteeResponseDto: {}
    }
  }
};
