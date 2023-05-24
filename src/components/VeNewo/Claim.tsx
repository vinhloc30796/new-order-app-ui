import {
  Box,
  Grid,
  Stack,
  Stat,
  StatLabel,
  StatNumber,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'
import { useMemo } from 'react'
import { avalanche } from 'wagmi/chains'
import { goerli, mainnet, useAccount, useNetwork } from 'wagmi'

import Card from 'components/Card'
import ConnectOverlay from 'components/ConnectOverlay'
import LockedToken from 'components/VeNewo/LockedToken'
import AirdropReward from 'components/VeNewo/AirdropReward'

import { useVeNewoContext } from 'store/contexts/veNewoContext'
import { useContractContext } from 'store/contexts/contractContext'

// import veNewoRewardsAvaxMerkleRoot from 'constants/airdrop/veNewoRewardsAvaxMerkleRoot.json'
// import veNewoRewardsEthMerkleRoot from 'constants/airdrop/veNewoRewardsEthMerkleRoot.json'

import veNewoRewardsFinalAvaxMerkleRoot from 'constants/airdrop/finalRewardsAvaxMerkleRoot.json'
// import veNewoRewardsFinalEthMerkleRoot from 'constants/airdrop/finalRewardsEthMerkleRoot.json'

const Claim = () => {
  const { address } = useAccount()
  const { contracts } = useContractContext()
  const { assetBalance, balance, multiplier } = useVeNewoContext()
  const { chain } = useNetwork()

  const merkleRoot = useMemo(() => {
    if (chain?.id === mainnet.id || chain?.id === goerli?.id) {
      return veNewoRewardsFinalAvaxMerkleRoot
    } else if (chain?.id === avalanche?.id) {
      return veNewoRewardsFinalAvaxMerkleRoot
    }
    return null
  }, [chain])

  return (
    <ConnectOverlay isConnected={!!address}>
      <Grid templateColumns={['1fr', '1fr', '1fr', 'repeat(3,1fr)']} gap="3">
        <Card variant="simple">
          <Stat>
            <StatLabel fontSize="lg">Your locked NEWO</StatLabel>
            <StatNumber color="brand.green" fontSize="2xl">
              {Number(assetBalance).toFixed(4)}
            </StatNumber>
          </Stat>
        </Card>
        <Card variant="simple">
          <Stat>
            <StatLabel fontSize="lg">Your veNEWO balance</StatLabel>
            <StatNumber color="brand.green" fontSize="2xl">
              {Number(balance).toFixed(4)}
            </StatNumber>
          </Stat>
        </Card>
        <Card variant="simple">
          <Stat>
            <StatLabel fontSize="lg">Your Multiplier</StatLabel>
            <StatNumber color="brand.green" fontSize="2xl">
              {multiplier}x
            </StatNumber>
          </Stat>
        </Card>
      </Grid>

      <Stack my="6">
        <Text fontSize="xl" color="brand.green">
          Locked Tokens Information
        </Text>

        <Box
          border="1px solid"
          borderColor="gray.80"
          borderRadius="8"
          overflow="hidden"
        >
          <Table variant="grayStriped">
            <Thead>
              <Tr>
                <Th>Token</Th>
                <Th>Amount Locked</Th>
                <Th>Unlock Date</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              <LockedToken
                veTokenAddress={contracts.VENEWO}
                tokenAddress={contracts.NEWO}
              />
            </Tbody>
          </Table>
        </Box>
      </Stack>

      <Stack my="6">
        <Text fontSize="xl" color="brand.green">
          Rewards Information
        </Text>

        <Box
          border="1px solid"
          borderColor="gray.80"
          borderRadius="8"
          overflow="hidden"
        >
          <Table variant="grayStriped">
            <Thead>
              <Tr>
                <Th w="48">Token</Th>
                <Th>Claimable Rewards</Th>
                <Th>Actions</Th>
                <Th minW="200"></Th>
              </Tr>
            </Thead>
            <Tbody>
              {contracts.VE_NEWO_REWARDS_AIRDROP && merkleRoot && (
                <AirdropReward
                  tokenAddress={contracts.NEWO}
                  distributorAddress={contracts.VE_NEWO_REWARDS_AIRDROP}
                  merkleRoot={merkleRoot}
                />
              )}
            </Tbody>
          </Table>
        </Box>
      </Stack>
    </ConnectOverlay>
  )
}

export default Claim
