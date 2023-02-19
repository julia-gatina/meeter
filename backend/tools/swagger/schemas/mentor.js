module.exports = {
  components: {
    schemas: {
      /**
       * @openapi
       * components:
       *  schemas:
       *    MentorResponseDto:
       *      type: object
       *      properties:
       *        id:
       *          type: string
       *        name:
       *          type: string
       *        email:
       *          type: string
       *        avatar:
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
       *        avatar: 'https://i.pravatar.cc/300?img=34'
       *        title: 'CEO'
       *        company: 'Google'
       *        experience: 12
       *        expertise: 'Inclusive Leadership, Public Speaking, Change Management and Data Analysis'
       */
      MentorResponseDto: {}
    }
  }
};
