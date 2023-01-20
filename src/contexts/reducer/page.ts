import { PageActions } from '../actions'

export const pageReducer = (
  state: State.AppState,
  { type, payload }: { type: PageActions; payload: State.PagePayload },
): State.AppState => {
  switch (type) {
    // statistic chart page
    case PageActions.UpdateStatistics:
      return {
        ...state,
        statistics: payload.statistics,
      }
    case PageActions.UpdateStatisticTotalDaoDeposit:
      return {
        ...state,
        statisticTotalDaoDeposits: payload.statisticTotalDaoDeposits,
      }
    case PageActions.UpdateStatisticTotalDaoDepositFetchEnd:
      return {
        ...state,
        statisticTotalDaoDepositsFetchEnd: payload.statisticTotalDaoDepositsFetchEnd,
      }
    case PageActions.UpdateStatisticNewDaoDeposit:
      return {
        ...state,
        statisticNewDaoDeposits: payload.statisticNewDaoDeposits,
      }
    case PageActions.UpdateStatisticNewDaoDepositFetchEnd:
      return {
        ...state,
        statisticNewDaoDepositsFetchEnd: payload.statisticNewDaoDepositsFetchEnd,
      }
    case PageActions.UpdateStatisticNewDaoWithdraw:
      return {
        ...state,
        statisticNewDaoWithdraw: payload.statisticNewDaoWithdraw,
      }
    case PageActions.UpdateStatisticNewDaoWithdrawFetchEnd:
      return {
        ...state,
        statisticNewDaoWithdrawFetchEnd: payload.statisticNewDaoWithdrawFetchEnd,
      }
    case PageActions.UpdateStatisticCirculationRatio:
      return {
        ...state,
        statisticCirculationRatios: payload.statisticCirculationRatios,
      }
    case PageActions.UpdateStatisticCirculationRatioFetchEnd:
      return {
        ...state,
        statisticCirculationRatiosFetchEnd: payload.statisticCirculationRatiosFetchEnd,
      }
    case PageActions.UpdateStatisticBlockTimeDistribution:
      return {
        ...state,
        statisticBlockTimeDistributions: payload.statisticBlockTimeDistributions,
      }
    case PageActions.UpdateStatisticBlockTimeDistributionFetchEnd:
      return {
        ...state,
        statisticBlockTimeDistributionsFetchEnd: payload.statisticBlockTimeDistributionsFetchEnd,
      }
    case PageActions.UpdateStatisticAverageBlockTime:
      return {
        ...state,
        statisticAverageBlockTimes: payload.statisticAverageBlockTimes,
      }
    case PageActions.UpdateStatisticAverageBlockTimeFetchEnd:
      return {
        ...state,
        statisticAverageBlockTimesFetchEnd: payload.statisticAverageBlockTimesFetchEnd,
      }
    case PageActions.UpdateStatisticEpochTimeDistribution:
      return {
        ...state,
        statisticEpochTimeDistributions: payload.statisticEpochTimeDistributions,
      }
    case PageActions.UpdateStatisticEpochTimeDistributionFetchEnd:
      return {
        ...state,
        statisticEpochTimeDistributionsFetchEnd: payload.statisticEpochTimeDistributionsFetchEnd,
      }
    case PageActions.UpdateStatisticNewNodeCount:
      return {
        ...state,
        statisticNewNodeCounts: payload.statisticNewNodeCounts,
      }
    case PageActions.UpdateStatisticNewNodeCountFetchEnd:
      return {
        ...state,
        statisticNewNodeCountsFetchEnd: payload.statisticNewNodeCountsFetchEnd,
      }
    case PageActions.UpdateStatisticNodeDistribution:
      return {
        ...state,
        statisticNodeDistributions: payload.statisticNodeDistributions,
      }
    case PageActions.UpdateStatisticNodeDistributionFetchEnd:
      return {
        ...state,
        statisticNodeDistributionsFetchEnd: payload.statisticNodeDistributionsFetchEnd,
      }
    case PageActions.UpdateStatisticTotalSupply:
      return {
        ...state,
        statisticTotalSupplies: payload.statisticTotalSupplies,
      }
    case PageActions.UpdateStatisticTotalSupplyFetchEnd:
      return {
        ...state,
        statisticTotalSuppliesFetchEnd: payload.statisticTotalSuppliesFetchEnd,
      }
    case PageActions.UpdateStatisticAnnualPercentageCompensation:
      return {
        ...state,
        statisticAnnualPercentageCompensations: payload.statisticAnnualPercentageCompensations,
      }
    case PageActions.UpdateStatisticAnnualPercentageCompensationFetchEnd:
      return {
        ...state,
        statisticAnnualPercentageCompensationsFetchEnd: payload.statisticAnnualPercentageCompensationsFetchEnd,
      }
    case PageActions.UpdateStatisticSecondaryIssuance:
      return {
        ...state,
        statisticSecondaryIssuance: payload.statisticSecondaryIssuance,
      }
    case PageActions.UpdateStatisticSecondaryIssuanceFetchEnd:
      return {
        ...state,
        statisticSecondaryIssuanceFetchEnd: payload.statisticSecondaryIssuanceFetchEnd,
      }
    case PageActions.UpdateStatisticInflationRate:
      return {
        ...state,
        statisticInflationRates: payload.statisticInflationRates,
      }
    case PageActions.UpdateStatisticInflationRateFetchEnd:
      return {
        ...state,
        statisticInflationRatesFetchEnd: payload.statisticInflationRatesFetchEnd,
      }
    case PageActions.UpdateStatisticLiquidity:
      return {
        ...state,
        statisticLiquidity: payload.statisticLiquidity,
      }
    case PageActions.UpdateStatisticLiquidityFetchEnd:
      return {
        ...state,
        statisticLiquidityFetchEnd: payload.statisticLiquidityFetchEnd,
      }

    default:
      return state
  }
}

export default pageReducer
