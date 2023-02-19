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
       *        meetings:
       *          type: array
       *          properties:
       *            id:
       *              type: string
       *            mentorId:
       *              type: string
       *            menteeId:
       *              type: string
       *            appointment:
       *              type: string
       *            createdIt:
       *              type: string
       *            mentor:
       *              type: object
       *              properties:
       *                id:
       *                  type: string
       *                name:
       *                  type: string
       *                email:
       *                  type: string
       *                title:
       *                  type: string
       *                company:
       *                  type: string
       *                experience:
       *                  type: number
       *                expertise:
       *                  type: string
       *      example:
       *        id: 'f9cddd3a-0e9e-4c9f-94d1-d99592b7cdae'
       *        name: 'Jane Doe'
       *        email: 'jane.doe@meeter.com'
       *        title: 'Developer'
       *        company: 'Google'
       *        experience: 7
       *        expertise: 'Inclusive Leadership, Public Speaking'
       *        meetings:
       *          -
       *            id: "3dfae39f-29ba-4885-86ea-cd502923e81f"
       *            mentor_id: "ccb9f966-a7fd-4aff-b66b-ce99d98dce49"
       *            mentee_id: "080edab4-b7e8-44e1-bda4-fc4376d6dd94"
       *            appointment: "2024-01-12T20:45:00.000Z"
       *            created_at: "2022-01-10T10:13:00.000Z"
       *            mentor:
       *              id: "ccb9f966-a7fd-4aff-b66b-ce99d98dce49"
       *              name: "Stephanie Redivo"
       *              email: "stephanie.redivo@meeter.com"
       *              avatar: "https://i.pravatar.cc/300?img=32"
       *              title: "Diversity, Equity and Inclusion Lead"
       *              company: "Translink"
       *              experience: 15
       *              expertise: "Inclusive Leadership, Public Speaking, Change Management and Data Analysis"
       */
      MenteeResponseDto: {}
    }
  }
};
