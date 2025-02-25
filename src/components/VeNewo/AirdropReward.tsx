import { Button, Td, Tr } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

import useToken from 'hooks/useToken'
import useVeAirdropReward from 'hooks/useVeAirdropReward'

interface AirdropRewardProps {
  distributorAddress?: `0x${string}`
  tokenAddress?: `0x${string}`
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  merkleRoot: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  previousMerkleRoot: any
}
const AirdropReward: React.FC<AirdropRewardProps> = ({
  distributorAddress,
  previousMerkleRoot,
  tokenAddress,
  merkleRoot,
}) => {
  const airdrop = useVeAirdropReward(
    merkleRoot,
    previousMerkleRoot,
    tokenAddress,
    distributorAddress
  )
  const token = useToken(tokenAddress)
  const [claimableAmount, setClaimableAmount] = useState(0)

  useEffect(() => {
    if (airdrop) {
      const claimable =
        Number(airdrop?.airdropAmount) - Number(airdrop?.claimableRewards)

      setClaimableAmount(claimable)
    }
  }, [airdrop])

  if (airdrop.isUpdating) {
    return (
      <Tr>
        <Td colSpan={5} h={24} color="brand.orange">
          Vaults are undergoing scheduled maintenance. Please check back soon.
        </Td>
      </Tr>
    )
  }

  return (
    <Tr>
      <Td>{token.tokenSymbol}</Td>
      <Td>{airdrop.APR ?? '0'} %</Td>
      <Td>
        {Number(claimableAmount).toFixed(4)} {token.tokenSymbol}
      </Td>
      <Td>
        <Button
          onClick={airdrop.claim}
          isLoading={airdrop.loading}
          disabled={
            !airdrop.isEligible ||
            Number(claimableAmount) === 0 ||
            airdrop.loading
          }
          loadingText="Claiming"
          variant="greenButton"
        >
          Claim Rewards
        </Button>
      </Td>
      <Td></Td>
    </Tr>
  )
}

export default AirdropReward
