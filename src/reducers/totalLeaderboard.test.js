import { totalLeaderboard } from './totalLeaderboard';
import * as totalLeaderboardActions from '../actions/totalLeaderboardActions';

it('builds the segment leaderboards correctly', () => {
    const newState = totalLeaderboard(null, updateLeaderboardActionExample);
    expect(newState.segmentLeaderboards).toBeDefined();
    expect(newState.segmentLeaderboards['665413']).toBeDefined();
    expect(newState.segmentLeaderboards['665413'].segment_id).toEqual('665413');
    expect(newState.segmentLeaderboards['665413'].entries).toHaveLength(5);

    expect(newState.segmentLeaderboards['665413'].entries[0]).toEqual({
        segment_id: '665413',
        athlete_name: 'Uncle Donald',
        elapsed_time: 904,
        moving_time: 904,
        start_date: '2018-04-14T08:29:32Z',
        start_date_local: '2018-04-14T10:29:32Z',
        rank: 1,
        points: 100,
        athlete_id: -1
    })
});

it('sorts correctly', () => {
    const newState = totalLeaderboard(null, sortingProblem);

    expect(newState.segmentLeaderboards['1'].entries[0].rank).toEqual(1);
    expect(newState.segmentLeaderboards['1'].entries[1].rank).toEqual(2);
    expect(newState.segmentLeaderboards['1'].entries[2].rank).toEqual(3);

    // expect(newState.segmentLeaderboards['2'].entries[0].rank).toEqual(1);
    // expect(newState.segmentLeaderboards['2'].entries[1].rank).toEqual(2);
    // expect(newState.segmentLeaderboards['2'].entries[2].rank).toEqual(3);

    // expect(newState.segmentLeaderboards['3'].entries[0].rank).toEqual(1);
    // expect(newState.segmentLeaderboards['3'].entries[1].rank).toEqual(2);
    // expect(newState.segmentLeaderboards['3'].entries[2].rank).toEqual(3);
});

const sortingProblem = {
    type: 'UPDATE_LEADERBOARD', 
    leaderboard: [
    {
        athlete_name: 'Scrooge McDuck',
        segments: [
            {
                segment_id: '1',
                rank: 2,
                points: 99,
            },
            {
                segment_id: '2',
                rank: 3,
                points: 98,
            },
            {
                segment_id: '3',
                rank: 1,
                points: 100,
            }
        ]
    },
    {
        athlete_name: 'Uncle Donald',
        segments: [
            {
                segment_id: '1',
                rank: 1,
                points: 100,
            },
            {
                segment_id: '2',
                rank: 2,
                points: 99,
            },
            {
                segment_id: '3',
                rank: 3,
                points: 98,
            }
        ]
    },
    {
        athlete_name: 'Pluto',
        segments: [
            {
                segment_id: '1',
                rank: 3,
                points: 98,
            },
            {
                segment_id: '2',
                rank: 1,
                points: 100,
            },
            {
                segment_id: '3',
                rank: 2,
                points: 99,
            }
        ]
    }
]
};

const updateLeaderboardActionExample = {
    type: 'UPDATE_LEADERBOARD',
    leaderboard: [
        {
            athlete_name: 'Scrooge McDuck',
            athlete_id: -1,
            segments: [
                {
                    segment_id: '12098216',
                    athlete_name: 'Scrooge McDuck',
                    elapsed_time: 157,
                    moving_time: 157,
                    start_date: '2018-04-22T08:58:03Z',
                    start_date_local: '2018-04-22T10:58:03Z',
                    rank: 1,
                    points: 100,
                    athlete_id: -1
                },
                {
                    segment_id: '1387885',
                    athlete_name: 'Scrooge McDuck',
                    elapsed_time: 1195,
                    moving_time: 1195,
                    start_date: '2018-04-20T16:19:35Z',
                    start_date_local: '2018-04-20T18:19:35Z',
                    rank: 2,
                    points: 99,
                    athlete_id: -1
                },
                {
                    segment_id: '1942901',
                    athlete_name: 'Scrooge McDuck',
                    elapsed_time: 1248,
                    moving_time: 1248,
                    start_date: '2018-04-18T17:03:37Z',
                    start_date_local: '2018-04-18T19:03:37Z',
                    rank: 14,
                    points: 87,
                    athlete_id: -1
                },
                {
                    segment_id: '4252879',
                    athlete_name: 'Scrooge McDuck',
                    elapsed_time: 397,
                    moving_time: 397,
                    start_date: '2018-04-16T15:43:45Z',
                    start_date_local: '2018-04-16T17:43:45Z',
                    rank: 9,
                    points: 92,
                    athlete_id: -1
                },
                {
                    segment_id: '5311719',
                    athlete_name: 'Scrooge McDuck',
                    elapsed_time: 917,
                    moving_time: 917,
                    start_date: '2018-04-22T08:24:31Z',
                    start_date_local: '2018-04-22T10:24:31Z',
                    rank: 7,
                    points: 94,
                    athlete_id: -1
                },
                {
                    segment_id: '632847',
                    athlete_name: 'Scrooge McDuck',
                    elapsed_time: 367,
                    moving_time: 367,
                    start_date: '2018-04-02T08:34:49Z',
                    start_date_local: '2018-04-02T10:34:49Z',
                    rank: 5,
                    points: 96,
                    athlete_id: -1
                },
                {
                    segment_id: '660072',
                    athlete_name: 'Scrooge McDuck',
                    elapsed_time: 456,
                    moving_time: 456,
                    start_date: '2018-04-22T09:50:48Z',
                    start_date_local: '2018-04-22T11:50:48Z',
                    rank: 8,
                    points: 93,
                    athlete_id: -1
                },
                {
                    segment_id: '665413',
                    athlete_name: 'Scrooge McDuck',
                    elapsed_time: 1209,
                    moving_time: 1209,
                    start_date: '2018-04-02T09:02:02Z',
                    start_date_local: '2018-04-02T11:02:02Z',
                    rank: 5,
                    points: 96,
                    athlete_id: -1
                }
            ],
            points: 757
        },
        {
            athlete_name: 'Uncle Donald',
            athlete_id: -1,
            segments: [
                {
                    segment_id: '1942901',
                    athlete_name: 'Uncle Donald',
                    elapsed_time: 1141,
                    moving_time: 1141,
                    start_date: '2018-04-18T17:03:40Z',
                    start_date_local: '2018-04-18T19:03:40Z',
                    rank: 6,
                    points: 95,
                    athlete_id: -1
                },
                {
                    segment_id: '4252879',
                    athlete_name: 'Uncle Donald',
                    elapsed_time: 301,
                    moving_time: 301,
                    start_date: '2018-04-17T16:05:42Z',
                    start_date_local: '2018-04-17T18:05:42Z',
                    rank: 1,
                    points: 100,
                    athlete_id: -1
                },
                {
                    segment_id: '5311719',
                    athlete_name: 'Uncle Donald',
                    elapsed_time: 746,
                    moving_time: 746,
                    start_date: '2018-04-21T11:41:46Z',
                    start_date_local: '2018-04-21T13:41:46Z',
                    rank: 1,
                    points: 100,
                    athlete_id: -1
                },
                {
                    segment_id: '632847',
                    athlete_name: 'Uncle Donald',
                    elapsed_time: 456,
                    moving_time: 456,
                    start_date: '2018-04-29T11:14:10Z',
                    start_date_local: '2018-04-29T13:14:10Z',
                    rank: 11,
                    points: 90,
                    athlete_id: -1
                },
                {
                    segment_id: '665413',
                    athlete_name: 'Uncle Donald',
                    elapsed_time: 904,
                    moving_time: 904,
                    start_date: '2018-04-14T08:29:32Z',
                    start_date_local: '2018-04-14T10:29:32Z',
                    rank: 1,
                    points: 100,
                    athlete_id: -1
                },
                {
                    segment_id: '734891',
                    athlete_name: 'Uncle Donald',
                    elapsed_time: 388,
                    moving_time: 388,
                    start_date: '2018-04-24T16:34:23Z',
                    start_date_local: '2018-04-24T18:34:23Z',
                    rank: 1,
                    points: 100,
                    athlete_id: -1
                }
            ],
            points: 585
        },
        {
            athlete_name: 'Pluto',
            athlete_id: -1,
            segments: [
                {
                    segment_id: '1942901',
                    athlete_name: 'Pluto',
                    elapsed_time: 1017,
                    moving_time: 1017,
                    start_date: '2018-04-18T17:03:35Z',
                    start_date_local: '2018-04-18T19:03:35Z',
                    rank: 1,
                    points: 100,
                    athlete_id: -1
                },
                {
                    segment_id: '4252879',
                    athlete_name: 'Pluto',
                    elapsed_time: 302,
                    moving_time: 302,
                    start_date: '2018-04-11T16:14:40Z',
                    start_date_local: '2018-04-11T18:14:40Z',
                    rank: 2,
                    points: 99,
                    athlete_id: -1
                },
                {
                    segment_id: '5311719',
                    athlete_name: 'Pluto',
                    elapsed_time: 855,
                    moving_time: 855,
                    start_date: '2018-04-16T16:58:49Z',
                    start_date_local: '2018-04-16T18:58:49Z',
                    rank: 3,
                    points: 98,
                    athlete_id: -1
                },
                {
                    segment_id: '632847',
                    athlete_name: 'Pluto',
                    elapsed_time: 353,
                    moving_time: 353,
                    start_date: '2018-03-14T15:12:23Z',
                    start_date_local: '2018-03-14T16:12:23Z',
                    rank: 3,
                    points: 98,
                    athlete_id: -1
                },
                {
                    segment_id: '665413',
                    athlete_name: 'Pluto',
                    elapsed_time: 1035,
                    moving_time: 1035,
                    start_date: '2018-03-28T12:44:42Z',
                    start_date_local: '2018-03-28T14:44:42Z',
                    rank: 4,
                    points: 97,
                    athlete_id: -1
                }
            ],
            points: 492
        },
        {
            athlete_name: 'Goofy',
            athlete_id: -1,
            segments: [
                {
                    segment_id: '1942901',
                    athlete_name: 'Goofy',
                    elapsed_time: 1130,
                    moving_time: 1130,
                    start_date: '2018-04-18T17:03:36Z',
                    start_date_local: '2018-04-18T19:03:36Z',
                    rank: 5,
                    points: 96,
                    athlete_id: -1
                },
                {
                    segment_id: '5311719',
                    athlete_name: 'Goofy',
                    elapsed_time: 888,
                    moving_time: 888,
                    start_date: '2018-04-13T17:38:51Z',
                    start_date_local: '2018-04-13T19:38:51Z',
                    rank: 4,
                    points: 97,
                    athlete_id: -1
                },
                {
                    segment_id: '632847',
                    athlete_name: 'Goofy',
                    elapsed_time: 419,
                    moving_time: 419,
                    start_date: '2018-04-15T07:06:42Z',
                    start_date_local: '2018-04-15T09:06:42Z',
                    rank: 9,
                    points: 92,
                    athlete_id: -1
                },
                {
                    segment_id: '660072',
                    athlete_name: 'Goofy',
                    elapsed_time: 351,
                    moving_time: 351,
                    start_date: '2018-04-21T17:29:08Z',
                    start_date_local: '2018-04-21T19:29:08Z',
                    rank: 1,
                    points: 100,
                    athlete_id: -1
                },
                {
                    segment_id: '7121442',
                    athlete_name: 'Goofy',
                    elapsed_time: 1030,
                    moving_time: 1030,
                    start_date: '2018-03-25T16:50:38Z',
                    start_date_local: '2018-03-25T18:50:38Z',
                    rank: 5,
                    points: 96,
                    athlete_id: -1
                }
            ],
            points: 481
        },
        {
            athlete_name: 'Mickey Mouse',
            athlete_id: -1,
            segments: [
                {
                    segment_id: '1942901',
                    athlete_name: 'Mickey Mouse',
                    elapsed_time: 1237,
                    moving_time: 1237,
                    start_date: '2018-04-17T16:28:30Z',
                    start_date_local: '2018-04-17T18:28:30Z',
                    rank: 10,
                    points: 91,
                    athlete_id: -1
                },
                {
                    segment_id: '4252879',
                    athlete_name: 'Mickey Mouse',
                    elapsed_time: 381,
                    moving_time: 381,
                    start_date: '2018-04-11T16:14:37Z',
                    start_date_local: '2018-04-11T18:14:37Z',
                    rank: 7,
                    points: 94,
                    athlete_id: -1
                },
                {
                    segment_id: '632847',
                    athlete_name: 'Mickey Mouse',
                    elapsed_time: 404,
                    moving_time: 404,
                    start_date: '2018-04-12T16:21:13Z',
                    start_date_local: '2018-04-12T18:21:13Z',
                    rank: 8,
                    points: 93,
                    athlete_id: -1
                },
                {
                    segment_id: '665413',
                    athlete_name: 'Mickey Mouse',
                    elapsed_time: 905,
                    moving_time: 905,
                    start_date: '2018-04-14T08:29:32Z',
                    start_date_local: '2018-04-14T10:29:32Z',
                    rank: 2,
                    points: 99,
                    athlete_id: -1
                },
                {
                    segment_id: '7121442',
                    athlete_name: 'Mickey Mouse',
                    elapsed_time: 967,
                    moving_time: 967,
                    start_date: '2018-04-26T05:53:25Z',
                    start_date_local: '2018-04-26T07:53:25Z',
                    rank: 4,
                    points: 97,
                    athlete_id: -1
                }
            ],
            points: 475
        },
        {
            athlete_name: 'Dolly Duck',
            athlete_id: -1,
            segments: [
                {
                    segment_id: '1942901',
                    athlete_name: 'Dolly Duck',
                    elapsed_time: 1241,
                    moving_time: 1241,
                    start_date: '2018-04-25T17:05:37Z',
                    start_date_local: '2018-04-25T19:05:37Z',
                    rank: 12,
                    points: 89,
                    athlete_id: -1
                },
                {
                    segment_id: '4252879',
                    athlete_name: 'Dolly Duck',
                    elapsed_time: 327,
                    moving_time: 327,
                    start_date: '2018-04-28T14:25:13Z',
                    start_date_local: '2018-04-28T16:25:13Z',
                    rank: 3,
                    points: 98,
                    athlete_id: -1
                },
                {
                    segment_id: '5311719',
                    athlete_name: 'Dolly Duck',
                    elapsed_time: 932,
                    moving_time: 932,
                    start_date: '2018-04-29T12:48:18Z',
                    start_date_local: '2018-04-29T14:48:18Z',
                    rank: 9,
                    points: 92,
                    athlete_id: -1
                },
                {
                    segment_id: '660072',
                    athlete_name: 'Dolly Duck',
                    elapsed_time: 388,
                    moving_time: 388,
                    start_date: '2018-04-21T09:54:57Z',
                    start_date_local: '2018-04-21T11:54:57Z',
                    rank: 2,
                    points: 99,
                    athlete_id: -1
                },
                {
                    segment_id: '665413',
                    athlete_name: 'Dolly Duck',
                    elapsed_time: 1302,
                    moving_time: 1302,
                    start_date: '2018-04-01T09:06:16Z',
                    start_date_local: '2018-04-01T11:06:16Z',
                    rank: 6,
                    points: 95,
                    athlete_id: -1
                }
            ],
            points: 473
        }
    ]
}
