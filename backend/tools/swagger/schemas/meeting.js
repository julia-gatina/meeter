module.exports = {
  components: {
    schemas: {
      /**
       * @openapi
       * components:
       *  schemas:
       *    MeetingResponseDto:
       *      type: object
       *      properties:
       *        id:
       *          type: string
       *        mentorId:
       *          type: string
       *        menteeId:
       *          type: string
       *        appointment:
       *          type: number
       *        url:
       *          type: string
       *        createdAt:
       *          type: number
       *
       *      example:
       *        id: 'f9cddd3a-0e9e-4c9f-94d1-d99592b7cdae'
       *        mentorId: 'f6b4a1ad-6d65-465d-912d-f347af2f2ae0'
       *        menteeId: '786b90a1-cd02-400e-be8c-398da6c365d3'
       *        appointment: '2022-01-10 02:13:00.000000'
       *        url: 'Google'
       *        createdAt: '2022-01-10 02:13:00.000000'
       */
      MeetingResponseDto: {},

      /**
       * @openapi
       * components:
       *  schemas:
       *    PostMeetingRequestDto:
       *      type: object
       *      properties:
       *        mentorId:
       *          type: string
       *        menteeId:
       *          type: string
       *        appointment:
       *          type: string
       *
       *      example:
       *        mentorId: 'f6b4a1ad-6d65-465d-912d-f347af2f2ae0'
       *        menteeId: '786b90a1-cd02-400e-be8c-398da6c365d3'
       *        appointment: '2022-01-10 02:13:00.000000'
       */
      PostMeetingRequestDto: {}
    }
  }
};
